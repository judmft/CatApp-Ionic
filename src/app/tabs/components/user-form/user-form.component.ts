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

  constructor(private tabsService: TabsService, private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit(){
    this.tabsService.createUser(this.userForm.value).subscribe(res => {

      console.log('El usuario ha sido creado correctamente', res);
    },
    () => {
      console.log('No se ha podido crear el producto');
    })
  }

}
