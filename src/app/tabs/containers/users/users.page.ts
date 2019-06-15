import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/users.model';
import { TabsService } from '../../tabs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class UsersPage implements OnInit {

  users: User[];
  userForm: FormGroup;
  @Output() userSelectEvent = new EventEmitter();

  constructor(private tabsService: TabsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tabsService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });


    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null],
      password: [null],
      password_confirm: [null],
    });
    
    // this.activatedRoute.params.subscribe(params => {
    //   if (params.beerBrand) {
    //     this.beersService.getBeer(params.beerBrand).subscribe(res => {
    //       this.beer = res;
    //       console.log(this.beer);
    //       this.formGroup.patchValue(this.beer);


    //       const variantsForm = this.formGroup.get('variants') as FormArray;
    //       this.beer.variants.forEach(element =>{
    //         variantsForm.push(this.formBuilder.group(element))
    //         console.log(element)

    //       }
    //       );
          
    //     }, err => {
    //       console.error(err);
    //     });
    //   }
    // })

    // this.formGroup.get('brand').valueChanges.subscribe(data => {
    //   console.log(data);
    //   this.formGroup.get('year').setValue(2015);
    // });
  }

  userSelection(user: User) {
    console.log(user)
    this.router.navigate(['users', user.userId]);

  }


}
