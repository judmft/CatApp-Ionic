import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingPage } from './missing.page';
import { MissingListComponent } from 'src/app/tabs/components/missing-list/missing-list.component';

const routes: Routes = [
  {
    path: '',
    component: MissingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissingPage, MissingListComponent]
})
export class MissingPageModule {}
