import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { Missing } from '../../models/missing.model';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.component.html',
  styleUrls: ['./missing-list.component.scss'],
})
export class MissingListComponent implements OnInit {

  @Input() missing_people: Missing[];
  @Output() missingSelectEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.missing_people
          }, 5000);
    
  }

  missing_personSelect(missing_person: Missing) {
    this.missingSelectEvent.emit(missing_person);
  }

}
