import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import { TabsService } from '../../tabs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  user: User;
  
  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) 
    {
      }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.tabsService.getUser(params.id).subscribe(res => {
          this.user = res;
          console.log("user", this.user)
        }, err => {
          console.error(err);
        });
      } 
    });
    
  }

  editUser(){
    this.router.navigate(['tabs/users', this.user.id, 'edit']) 
  }
  

}
