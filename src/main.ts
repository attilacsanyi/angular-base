import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// https://material.angular.io/guide/getting-started#step-5-gesture-support
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule, {
  preserveWhitespaces: false
});
