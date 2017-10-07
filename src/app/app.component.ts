/* tslint:disable:no-access-missing-member*/
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routerSlideToLeftAnimation } from './shared/animations';

@Component({
  moduleId: module.id,
  selector: 'ac-root',
  animations: [routerSlideToLeftAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Angular Base';

  ngOnInit() { }

}
