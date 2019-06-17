import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.page.html',
  styleUrls: ['./resource-edit.page.scss'],
})
export class ResourceEditPage implements OnInit {
  
  resource: Resource;
  resourceForm: FormGroup;
  
  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute){

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
  
  onSubmit(){
    if (this.resource.id){
      this.tabsService.updateResource(this.resource.id, this.resourceForm.value).subscribe(res => {
        console.log(res)
        this.router.navigate(['tabs/resources'])
        console.log('El recurso ha sido editado correctamente', res);
      },
      () => {
        console.log('No se ha podido editar el recurso');
      });
    }else{
      this.tabsService.createResource(this.resourceForm.value).subscribe(res => {
      this.router.navigate(['tabs/resources'])
      console.log('El recurso ha sido creado correctamente', res);
    },
    () => {
      console.log('No se ha podido crear el recurso');
    })
    } 
  }
}
