import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourcesPage } from './resources.page';
import { ResourceListComponent } from 'src/app/tabs/components/resource-list/resource-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ResourcesPage }])
  ],
  declarations: [ResourcesPage, ResourceListComponent]
})
export class ResourcesPageModule {}
