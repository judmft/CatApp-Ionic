import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class UsersPage implements OnInit{

  @Input() users: User[];
  @Output() userSelectEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  beerSelect(user: User) {
    this.userSelectEvent.emit(user);
  }

}
