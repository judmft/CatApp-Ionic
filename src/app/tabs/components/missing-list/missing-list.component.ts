import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { Missing } from '../../models/missing.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.component.html',
  styleUrls: ['./missing-list.component.scss'],
})
export class MissingListComponent implements OnInit {

  @Input() missing_people: Missing[];
  @Output() missingSelectEvent = new EventEmitter();
  @Output() missingDeleteEvent = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private alertController: AlertController, private tabsService: TabsService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.tabsService.getMissingPeople().subscribe(missing => {
      this.missing_people = missing;
    });
  }

  missingSelect(missing_person: Missing) {
    this.missingSelectEvent.emit(missing_person.id);
  }

  deleteMissing(missing: Missing) {
    this.missingDeleteEvent.emit(missing.id);
    this.router.navigate(["../../users"], {relativeTo: this.route});
  }

  async presentAlertConfirm(missing: Missing) {
    const alert = await this.alertController.create({
      header: 'Eliminar persona',
      message: 'Esta persona se eliminará definitivamente',
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
            this.deleteMissing(missing);
          }
        }
      ]
    });
    await alert.present();
  }

}
