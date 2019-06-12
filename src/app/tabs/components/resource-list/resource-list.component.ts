import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent implements OnInit {

  @Input() resources: Resource[];
  @Output() resourceSelectEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.resources
    }, 3000);
  }

  resourceSelect(resource: Resource) {
    this.resourceSelectEvent.emit(resource);
  }

}
