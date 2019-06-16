import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResourceEditPage } from './resource-edit.page';
import { ResourceFormComponent } from '../../components/resource-form/resource-form.component';

const routes: Routes = [
  {
    path: '',
    component: ResourceEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResourceEditPage, ResourceFormComponent]
})
export class ResourceEditPageModule {}
