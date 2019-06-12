import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class UsersPage implements OnInit {

  users: User[];
  @Output() userSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tabsService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }




}
