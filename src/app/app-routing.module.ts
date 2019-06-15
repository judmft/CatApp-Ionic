import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'missing-person', loadChildren: './tabs/containers/missing-person/missing-person.module#MissingPersonPageModule' },
  { path: 'resource', loadChildren: './tabs/containers/resource/resource.module#ResourcePageModule' },
  { path: 'user-detail', loadChildren: './tabs/containers/user-detail/user-detail.module#UserDetailPageModule' },
  { path: 'user-edit', loadChildren: './tabs/containers/user-edit/user-edit.module#UserEditPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
