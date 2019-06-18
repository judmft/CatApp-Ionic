import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../../models/users.model';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent implements OnInit {

  @Input() resources: Resource[];
  @Output() resourceSelectEvent = new EventEmitter();
  @Output() resourceDeleteEvent = new EventEmitter();

  constructor(private router: Router, private alertController: AlertController, private tabsService: TabsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  resourceSelect(resource: Resource) {
    this.resourceSelectEvent.emit(resource.id);
  }

  ionViewWillEnter(){
    this.tabsService.getResources().subscribe(resources => {
      this.resources = resources;
    });
  }
  deleteResource(resource: Resource) {
    this.resourceDeleteEvent.emit(resource.id);
    this.router.navigate(["../../users"], {relativeTo: this.route});

  }

  async presentAlertConfirm(resource: Resource) {
    const alert = await this.alertController.create({
      header: 'Eliminar recurso',
      message: 'Este recurso se eliminará definitivamente',
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
            this.deleteResource(resource);
          }
        }
      ]
    });
    await alert.present();
  }

}
