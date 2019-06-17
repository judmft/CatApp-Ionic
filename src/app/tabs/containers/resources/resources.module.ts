import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourcesPage } from './resources.page';
import { ResourceListComponent } from 'src/app/tabs/components/resource-list/resource-list.component';
import { ResourcePage } from '../resource/resource.page';
import { ResourceDetailComponent } from '../../components/resource-detail/resource-detail.component';
import { ResourceEditPage } from '../resource-edit/resource-edit.page';
import { ResourceFormComponent } from '../../components/resource-form/resource-form.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesPage
  },
  {
    path: 'new',
    component: ResourceEditPage
  },
  {
    path: ':id',
    component: ResourcePage
  },
  {
    path: ':id/edit',
    component: ResourceEditPage
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
  declarations: [ResourcesPage, ResourceListComponent, ResourcePage, ResourceDetailComponent, ResourceEditPage, ResourceFormComponent]
})
export class ResourcesPageModule {}
