import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { takeWhile } from 'rxjs/operators';

import { SnackBarService } from '@shared/services';

@Injectable()
export class NotificationService {
  private isAlive = true;

  constructor(private snackBarService: SnackBarService, private swUpdate: SwUpdate) {}

  subscribeForNewUpdates = () => {
    if (!this.swUpdate.isEnabled) return;

    // Service Worker updates
    this.swUpdate.available.pipe(takeWhile(() => this.isAlive)).subscribe(() => {
      this.snackBarService
        .openSnackBar('New version available.', NaN, 'Refresh')
        .onAction()
        .subscribe(() => window.location.reload());
    });
  };

  unsubscribeNotifications = () => (this.isAlive = false);
}
