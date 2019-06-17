import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserEditPage } from './user-edit.page';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UsersPage } from '../users/users.page';

const routes: Routes = [
  {
    path: 'tabs/users',
    component: UsersPage
  },
  {
    path: '',
    component: UserEditPage
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserEditPage, UserFormComponent, UsersPage]
})
export class UserEditPageModule {}
