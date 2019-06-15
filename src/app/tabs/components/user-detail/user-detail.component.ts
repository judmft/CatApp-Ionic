import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
    console.log("detail", this.user)
  }

}
