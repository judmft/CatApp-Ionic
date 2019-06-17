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

  constructor(private tabsService: TabsService, private router: Router) {}

  ngOnInit() {}

//El Lazy Load de Ionic hace que esta página se cargue una sola vez
  //por lo que para ver los cambios sin recargar el navegadro debemos llamar a esta función
  ionViewWillEnter(){
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
