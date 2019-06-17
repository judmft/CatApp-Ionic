import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Missing } from '../../models/missing.model';
import { TabsService } from '../../tabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.page.html',
  styleUrls: ['./missing.page.scss'],
})
export class MissingPage implements OnInit {

  missing_people: Missing[];
  @Output() missingSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService, private router: Router) { }

  ngOnInit() {
    this.tabsService.getMissingPeople().subscribe(missing => {
      this.missing_people = missing;
    });
  }

  missingSelection(id: number) {
    this.router.navigate(['tabs/missing', id]);

  }

  addMissing(){
    this.router.navigate(['tabs/missing/new'])
  }
}
