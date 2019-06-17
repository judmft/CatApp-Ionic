import { Component, OnInit, Input } from '@angular/core';
import { Missing } from '../../models/missing.model';

@Component({
  selector: 'app-missing-detail',
  templateUrl: './missing-detail.component.html',
  styleUrls: ['./missing-detail.component.scss'],
})
export class MissingDetailComponent implements OnInit {

  @Input() missing_person: Missing;
  
  constructor() { }

  ngOnInit() {}

}
