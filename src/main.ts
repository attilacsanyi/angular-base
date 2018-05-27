import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import { environment } from '@env';

import { AppModule } from './app/app.module';

if (environment.production) enableProdMode();

document.addEventListener('DOMContentLoaded', () => platformBrowserDynamic().bootstrapModule(AppModule));
