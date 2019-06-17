import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Input() user: User;

  tipos = [
    "Usuario",
    "Admin",
    "Invitado"
  ];
  perfiles = [
    "Médico",
    "Enfermero",
    "TES",
    "Socorrista",
    "Humanitario",
    "Psicólogo",
    "Administrativo",
    "Mantenimiento"
  ]

  constructor() {}

  ngOnInit() {}

  
}
