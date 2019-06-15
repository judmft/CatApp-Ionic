import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { TabsService } from '../../tabs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class UsersPage implements OnInit {

  user: User;
  users: User[];
  userForm: FormGroup;
  @Output() userSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder) {

   }

  ngOnInit() {

    this.tabsService.getUsers().subscribe(users => {
      this.users = users;
    });

    


    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.email],
      password: [null],
      password_confirm: [null],
    });

  }

  userSelection(id: number) {
    this.router.navigate(['tabs/users', id]);

  }


}
