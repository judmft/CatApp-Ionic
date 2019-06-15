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

  users: User[];
  @Output() userSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService, private router: Router) {

   }

  ngOnInit() {

    this.tabsService.getUsers().subscribe(users => {
      this.users = users;
    });

  }

  userSelection(id: number) {
    this.router.navigate(['tabs/users', id]);

  }

  addUser(){
    this.router.navigate(['tabs/users/new'])
  }


}
