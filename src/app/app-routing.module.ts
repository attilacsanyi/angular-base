import { NgModule } from '@angular/core';
import { RouterModule, /* PreloadAllModules, */ Routes } from '@angular/router';
import { environment } from '../environments/environment';

export const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Lazy loaded modules
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },

  // { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Enable router tracing
      enableTracing: environment.routeTracing,

      // Preload all Lazy modules while the user start navigating the app
      // preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
