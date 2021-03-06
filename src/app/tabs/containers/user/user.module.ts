import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';
import { UserEditPage } from '../user-edit/user-edit.page';

const routes: Routes = [
  
  {
    path: '',
    component: UserPage
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserPage, UserEditPage]
})
export class UserPageModule {}
