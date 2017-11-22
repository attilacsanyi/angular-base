import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// https://material.angular.io/guide/getting-started#step-5-gesture-support
if (environment.production) enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(AppModule, { preserveWhitespaces: false })
  .catch(err => console.log(err));
