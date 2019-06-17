import { Component, OnInit } from '@angular/core';
import { Missing } from '../../models/missing.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-missing-person',
  templateUrl: './missing-person.page.html',
  styleUrls: ['./missing-person.page.scss'],
})
export class MissingPersonPage implements OnInit {

  missing_person: Missing;

  constructor(private activatedRoute: ActivatedRoute, private tabsService: TabsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getMissingPerson(params.id).subscribe(res => {
          this.missing_person = res;
          console.log("missing", this.missing_person)
        }, err => {
          console.error(err);
        });
      }
    });
  }
  
  editResource(){
    this.router.navigate(['tabs/missing', this.missing_person.id, 'edit']) 
  }

}
