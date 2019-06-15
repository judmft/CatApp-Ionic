import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/users.model';
import { FormGroup, FormControl } from '@angular/forms';
import { TabsService } from '../../tabs.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @Input() users: User[];
  @Input() userForm: FormGroup;


  constructor(private tabsService: TabsService) {
  
  }

  ngOnInit() {
    // this.userForm.get('photo').valueChanges.pipe(debounceTime(2000)).subscribe(data => {
    //   console.log(data);
    //   this.userForm = data;
    // });

    // this.formGroup.addControl('new', new FormControl(this.beer.brand));

  }

  onSubmit(){
    console.log(this.userForm.value)
    this.tabsService.createUser(this.userForm.value).subscribe(res => {
      console.log('El producto ha sido creado correctamente', res);
    },
    () => {
      console.log('No se ha podido crear el producto');
    })
  }

}
