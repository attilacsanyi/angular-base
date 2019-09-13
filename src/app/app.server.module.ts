import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ServerModule } from '@angular/platform-server';
import { RouterModule, Routes } from '@angular/router';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [{ path: 'shell', component: ShellComponent }];

/**
 * Universal Rendering
 * https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/universal-rendering.md
 *
 * Flex Layout SSR
 * https://github.com/angular/flex-layout/blob/master/guides/SSR.md
 */
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  declarations: [ShellComponent]
})
export class AppServerModule {}
