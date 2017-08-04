import { Observable } from 'rxjs/Observable';
import { environment } from '@environment/environment';
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/empty';

// Operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/single';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/retryWhen';
// import 'rxjs/add/operator/pluck';
// import 'rxjs/add/operator/combineLatest';
// import 'rxjs/add/operator/withLatestFrom';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/skip';
// import 'rxjs/add/operator/concat';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/zip';
// import 'rxjs/add/observable/of';

// Custom operators
const isDebugging = environment.rxJsDebugger;

declare module 'rxjs/Observable' {
  // tslint:disable-next-line:no-shadowed-variable
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

Observable.prototype.debug = function (message: string) {
  return this.do(
    nextValue => {
      if (isDebugging) {
        console.groupCollapsed(message);
        if (Array.isArray(nextValue)) {
          console.table(nextValue);
        } else {
          // tslint:disable-next-line:no-console
          console.debug(nextValue);
        }
        console.groupEnd();
      }
    },
    error => {
      if (isDebugging) {
        console.error(message, error);
      }
    },
    () => {
      if (isDebugging) {
        // tslint:disable-next-line:no-console
        console.info(`${message} - completed`);
      }
    }
  );
};

