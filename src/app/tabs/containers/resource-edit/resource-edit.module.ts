import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResourceEditPage } from './resource-edit.page';
import { ResourceFormComponent } from '../../components/resource-form/resource-form.component';
import { ResourcesPage } from '../resources/resources.page';

const routes: Routes = [
  {
    path: 'tabs/resources',
    component: ResourcesPage
  },
  {
    path: '',
    component: ResourceEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResourceEditPage, ResourceFormComponent, ResourcesPage]
})
export class ResourceEditPageModule {}
