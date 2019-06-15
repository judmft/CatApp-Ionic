import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  user: User;
  
  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) 
    { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {
      console.log("params: ", params)

      this.tabsService.getUser(params.id).subscribe(res => {
        console.log("res: ", res)
        this.user = res;
      }, err => {
        console.error(err);
      });
    })
  }

}
