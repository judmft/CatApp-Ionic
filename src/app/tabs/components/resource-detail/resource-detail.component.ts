import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss'],
})
export class ResourceDetailComponent implements OnInit {

  @Input() resource: Resource;
  
  constructor() { }

  ngOnInit() {
    console.log(this.resource)
  }

}
