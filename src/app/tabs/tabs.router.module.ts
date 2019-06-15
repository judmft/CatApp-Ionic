import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'users',
        loadChildren: './containers/users/users.module#UsersPageModule'
      },
  
      {
        path: 'resources',
        loadChildren: './containers/resources/resources.module#ResourcesPageModule'
      },
      {
        path: 'missing',
        loadChildren: './containers/missing/missing.module#MissingPageModule'
      },
      {
        path: '',
        redirectTo: 'tabs/users',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
