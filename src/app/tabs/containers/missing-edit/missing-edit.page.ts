import { Component, OnInit } from '@angular/core';
import { Missing } from '../../models/missing.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-missing-edit',
  templateUrl: './missing-edit.page.html',
  styleUrls: ['./missing-edit.page.scss'],
})
export class MissingEditPage implements OnInit {

  missing_person: Missing;
  missingForm: FormGroup;
  
  constructor(private alertController: AlertController, private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute){

  } 

  ngOnInit() {
    this.missingForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      age: [null, Validators.required],
      gender:[null, Validators.required],
      description:[null, Validators.required],
      height:[null, Validators.required],
      weight: [null, Validators.required],
      eye: [null, Validators.required],
      race: [null, Validators.required],
      hair: [null, Validators.required],
      hair_color: [null, Validators.required],
      complexion: [null, Validators.required],
      contact_name: [null, Validators.required],
      relationship: [null, Validators.required],
      phone: [null, Validators.required],
  
    });

    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getMissingPerson(params.id).subscribe(res => {
          this.missing_person = res;
          this.missingForm.patchValue(this.missing_person);
        }, err => {
          console.error(err);
        });
      } 
    });
  }

  async okAlert() {
    const alert = await this.alertController.create({
      message: !this.missing_person ? 'Persona añadida' : 'Se han editado los datos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: !this.missing_person ? 'No se ha podido añadir la persona' : 'No se han podido editar los datos',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  onSubmit(){
    if (this.missing_person.id){
      this.tabsService.updateMissing(this.missing_person.id, this.missingForm.value).subscribe(res => {
        this.okAlert();
        this.router.navigate(['tabs/missing'])
      },
      () => {
        this.errorAlert();
      });
    }else{
      this.tabsService.createMissing(this.missingForm.value).subscribe(res => {
      this.okAlert();
      this.router.navigate(['tabs/missing'])
    },
    () => {
      this.errorAlert();
    });
    }
    
  }

}
