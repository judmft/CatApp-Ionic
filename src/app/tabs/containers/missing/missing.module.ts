import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingPage } from './missing.page';
import { MissingListComponent } from 'src/app/tabs/components/missing-list/missing-list.component';
import { MissingEditPage } from '../missing-edit/missing-edit.page';
import { MissingPersonPage } from '../missing-person/missing-person.page';
import { MissingDetailComponent } from '../../components/missing-detail/missing-detail.component';
import { MissingFormComponent } from '../../components/missing-form/missing-form.component';

const routes: Routes = [
  {
    path: '',
    component: MissingPage
  },
  {
    path: 'new',
    component: MissingEditPage
  },
  {
    path: ':id',
    component: MissingPersonPage
  },
  {
    path: ':id/edit',
    component: MissingEditPage
  },  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissingPage, MissingListComponent, MissingPersonPage, MissingDetailComponent, MissingEditPage, MissingFormComponent]
})
export class MissingPageModule {}
