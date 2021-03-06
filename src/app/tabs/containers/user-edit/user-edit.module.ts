import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserEditPage } from './user-edit.page';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UsersPage } from '../users/users.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditPage
  },
  {
    path: 'tabs/users',
    component: UsersPage
  },
  

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserEditPage, UserFormComponent, UsersPage]
})
export class UserEditPageModule {}
