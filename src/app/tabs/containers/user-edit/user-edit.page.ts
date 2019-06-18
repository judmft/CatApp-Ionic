import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TabsPage } from '../../tabs.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  
  user: User;
  userForm: FormGroup;
  
  constructor(
    private tabsService: TabsService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController)
    {

  } 

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      dni: [null, Validators.pattern('^[0-9]{8}[a-zA-Z]{1}$')],
      age: [null],
      phone: [null],
      tipo: [null, Validators.required],
      perfil: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      password_confirmation: [null, Validators.required],

    });


    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getUser(params.id).subscribe(res => {
          this.user = res;
          console.log("user", this.user)
          this.userForm.patchValue(this.user);
        }, err => {
          console.error(err);
        });
      } 
    });
  }

  async okAlert() {
    const alert = await this.alertController.create({
      message: !this.user ? 'Usuario añadido' : 'Se han editado los datos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: !this.user ? 'No se ha podido añadir el usuario' : 'No se han podido editar los datos',
      buttons: ['OK']
    });
  }

  onSubmit(){
    if (this.user){
      // this.userForm.get('password').errors
      this.tabsService.updateUser(this.user.id, this.userForm.value).subscribe(res => {
        this.okAlert();
        this.router.navigate(['tabs/users'])
      },
      () => {
        this.errorAlert();
      });
    }else{
      this.tabsService.createUser(this.userForm.value).subscribe(res => {
        this.okAlert();
        this.router.navigate(['tabs/users'])
      },
    () => {
      this.errorAlert();
    });
    }
  } 
}
