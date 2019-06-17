import { Component, OnInit } from '@angular/core';
import { Missing } from '../../models/missing.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missing-edit',
  templateUrl: './missing-edit.page.html',
  styleUrls: ['./missing-edit.page.scss'],
})
export class MissingEditPage implements OnInit {

  missing_person: Missing;
  missingForm: FormGroup;
  
  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute){

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
      relatioship: [null, Validators.required],
      phone: [null, Validators.required],
  
    });

    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getMissingPerson(params.id).subscribe(res => {
          this.missing_person = res;
          console.log("missing", this.missing_person)
          this.missingForm.patchValue(this.missing_person);
        }, err => {
          console.error(err);
        });
      } 
    });
  }
  
  onSubmit(){
    if (this.missing_person.id){
      this.tabsService.updateMissing(this.missing_person.id, this.missingForm.value).subscribe(res => {
        console.log(res)
        this.router.navigate(['tabs/missing'])
        console.log('Los datos de la persona desaprecida han sido editados correctamente', res);
      },
      () => {
        console.log('No se han podido editar los datos de la persona desaparecida');
      });
    }else{
      this.tabsService.createMissing(this.missingForm.value).subscribe(res => {
      this.router.navigate(['tabs/missing'])
      console.log('La persona desaparecida se ha añadido correctamente', res);
    },
    () => {
      console.log('No se ha podido añadir la persona desaparecida')
    })
    }
    
  }

}
