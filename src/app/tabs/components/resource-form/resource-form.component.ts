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

  categorias = [
    "Hospital",
    "Albergue",
    "PMA",
    "Ambulancia",
    "VIR",
    "Vehículo",
    "Otros"
  ]

  constructor() { }

  ngOnInit() {
  }

  

}
