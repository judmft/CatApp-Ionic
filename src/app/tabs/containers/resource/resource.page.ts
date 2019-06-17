import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsService } from '../../tabs.service';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss'],
})
export class ResourcePage implements OnInit {

  resource: Resource;

  constructor(private activatedRoute: ActivatedRoute, private tabsService: TabsService, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getResource(params.id).subscribe(res => {
          this.resource = res;
          console.log("resource", this.resource)
        }, err => {
          console.error(err);
        });
      }
    });
  }

  editResource(){
    this.router.navigate(['tabs/resources', this.resource.id, 'edit']) 
  }

}
