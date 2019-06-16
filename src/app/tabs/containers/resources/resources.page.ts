
import { Component, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { TabsService } from '../../tabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: 'resources.page.html',
  styleUrls: ['resources.page.scss']
})
export class ResourcesPage {

  resources: Resource[];
  @Output() resourceSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService, private router: Router) { }

  ngOnInit() {
    this.tabsService.getResources().subscribe(resource => {
      console.log(resource)
      this.resources = resource;
    });
  }

  resourceSelection(id: number) {
    this.router.navigate(['tabs/resources', id]);

  }

  addResource(){
    this.router.navigate(['tabs/resources/new'])
  }
}
