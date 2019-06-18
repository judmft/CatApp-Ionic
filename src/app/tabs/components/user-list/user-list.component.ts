import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() userSelectEvent = new EventEmitter();
  @Output() userDeleteEvent = new EventEmitter();


  constructor(private router: Router, private alertController: AlertController, private route: ActivatedRoute) { }

  ngOnInit(){}

  
  userSelect(user: User) {
    console.log(user)
    this.userSelectEvent.emit(user.id);
  }

  deleteUser(user: User) {
    this.userDeleteEvent.emit(user.id);
    this.router.navigate(["../../resources"], {relativeTo: this.route});
  }

  async presentAlertConfirm(user: User) {
    const alert = await this.alertController.create({
      header: 'Eliminar usuario',
      message: 'Este usuario se eliminará definitivamente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteUser(user);
          }
        }
      ]
    });
    await alert.present();
  }
}
