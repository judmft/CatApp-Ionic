import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  
  user: User;
  userForm: FormGroup;
  
  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute){

  } 

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      dni: [null],
      age: [null],
      phone: [null],
      tipo: [null],
      perfil: [null],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      password_confirmation: [null],

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

}
