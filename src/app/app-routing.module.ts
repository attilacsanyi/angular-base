import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Lazy loaded modules
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }

  //{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Enable router tracing
      enableTracing: environment.routeTracing,

      // Preload all Lazy modules while the user start navigating the app
      preloadingStrategy: PreloadAllModules,

      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
