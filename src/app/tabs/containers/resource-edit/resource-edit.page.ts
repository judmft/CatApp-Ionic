import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.page.html',
  styleUrls: ['./resource-edit.page.scss'],
})
export class ResourceEditPage implements OnInit {
  
  resource: Resource;
  resourceForm: FormGroup;
  
  constructor(
    private tabsService: TabsService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
    )
   
    {

  } 

  ngOnInit() {
    this.resourceForm = this.formBuilder.group({
      name: [null, Validators.required],
      localization: [null, Validators.required],
      category: [null, Validators.required],
    });

    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getResource(params.id).subscribe(res => {
          this.resource = res;
          console.log("resource", this.resource)
          this.resourceForm.patchValue(this.resource);
        }, err => {
          console.error(err);
        });
      } 
    });
  }
  
  async okAlert() {
    const alert = await this.alertController.create({
      message: !this.resource ? 'Recurso añadido' : 'Se han editado los datos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: !this.resource ? 'No se ha podido añadir el recurso' : 'No se han podido editar los datos',
      buttons: ['OK']
    });

    await alert.present();
  } 

  onSubmit(){
    if (this.resource){
      this.tabsService.updateResource(this.resource.id, this.resourceForm.value).subscribe(res => {
        this.okAlert();
        this.router.navigate(['tabs/resources'])
      },
      () => {
        this.errorAlert();
      });
    }else{
      this.tabsService.createResource(this.resourceForm.value).subscribe(res => {
      this.okAlert();
      this.router.navigate(['tabs/resources'])
    },
    () => {
      this.errorAlert()
    });
    } 
  }
}
