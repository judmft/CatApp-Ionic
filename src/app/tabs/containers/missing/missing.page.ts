import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Missing } from '../../models/missing.model';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.page.html',
  styleUrls: ['./missing.page.scss'],
})
export class MissingPage implements OnInit {

  missing_people: Missing[];
  @Output() userSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tabsService.getMissingPeople().subscribe(missing_people => {
      console.log(missing_people)
      this.missing_people = missing_people;
    });
  }
}
