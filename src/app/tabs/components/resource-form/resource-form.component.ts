import { Component, OnInit, Input } from '@angular/core';
import { TabsService } from '../../tabs.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
})
export class ResourceFormComponent implements OnInit {

  @Input() resourceForm: FormGroup;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {}

  onSubmit(){
    this.tabsService.createResource(this.resourceForm.value).subscribe(res => {
      console.log('El recurso ha sido creado correctamente', res);
    },
    () => {
      console.log('No se ha podido crear el recurso');
    })
  }

}
