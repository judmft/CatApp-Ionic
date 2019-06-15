import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersPage } from './users.page';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UserPage } from '../user/user.page';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';
import { UserEditPage } from '../user-edit/user-edit.page';

const routes = [
  {
    path: '',
    component: UsersPage
  },
  {
    path: 'new',
    component: UserEditPage
  },
  {
    path: ':id',
    component: UserPage
  },
  {
    path: ':id/edit',
    component: UserEditPage
  },  

]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersPage, UserPage, UserListComponent, UserFormComponent, UserDetailComponent, UserEditPage]
})
export class UsersPageModule {}
