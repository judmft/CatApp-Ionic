import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingEditPage } from './missing-edit.page';
import { MissingFormComponent } from '../../components/missing-form/missing-form.component';
import { MissingPage } from '../missing/missing.page';

const routes: Routes = [
  {
    path: 'tabs/missing',
    component: MissingPage
  },
  {
    path: '',
    component: MissingEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissingEditPage, MissingFormComponent, MissingPage]
})
export class MissingEditPageModule {}
