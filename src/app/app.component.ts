import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { NotificationService } from '@core/services';

import { routerSlideToLeftAnimation } from './shared/animations';

@Component({
  selector: 'ac-root',
  animations: [routerSlideToLeftAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Base';

  constructor(private notifications: NotificationService) {}

  ngOnInit() {
    this.notifications.subscribeForNewUpdates();
  }

  ngOnDestroy() {
    this.notifications.unsubscribeNotifications();
  }
}
