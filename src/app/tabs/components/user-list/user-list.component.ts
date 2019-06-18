import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() userSelectEvent = new EventEmitter();
  @Output() userDeleteEvent = new EventEmitter();


  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit(){}

  userSelect(user: User) {
    console.log(user)
    this.userSelectEvent.emit(user.id);
  }

  deleteUser(user: User) {
    console.log(user)
    this.router.navigate(['tabs/users']);
    this.userDeleteEvent.emit(user.id);
  }

  async presentAlertConfirm(user: User) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteUser(user);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
