import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-missing-form',
  templateUrl: './missing-form.component.html',
  styleUrls: ['./missing-form.component.scss'],
})
export class MissingFormComponent implements OnInit {

  @Input() missingForm: FormGroup;

  genders = [
    "Masculino",
    "Fememnino"
  ];
  eyes = [
    "Marrón",
    "Ambar",
    "Avellana",
    "Verde",
    "Azul",
    "Gris"
  ];
  races = [
    "Blanco",
    "Negro",
    "Mulato", 
    "Chino", 
    "Indio", 
    "Arabe"
  ];
  hairs = [
    "Corto",
    "Largo", 
    "Calvo"
  ];
  hair_colors = [
    "Castaño", 
    "Moreno", 
    "Rubio", 
    "Pelirrojo", 
    "Canoso"
  ];
  complexions = [
    "Delgado", 
    "Media", 
    "Obeso"
  ]
  
  constructor() { }

  ngOnInit() {}

}
