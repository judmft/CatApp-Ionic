import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingPersonPage } from './missing-person.page';
import { MissingEditPage } from '../missing-edit/missing-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MissingPersonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissingPersonPage, MissingEditPage]
})
export class MissingPersonPageModule {}
