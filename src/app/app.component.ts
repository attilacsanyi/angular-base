import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { routerSlideToLeftAnimation } from './shared/animations';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerSlideToLeftAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Angular Base';

  ngOnInit() {}
}
