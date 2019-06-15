import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() userSelectEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.users
    }, 3000);
  }

  userSelect(user: User) {
    console.log(user)
    this.userSelectEvent.emit(user.id);
  }


}
