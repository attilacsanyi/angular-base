import { DefaultUrlSerializer } from '@angular/router';

namespace Singletons {
  export class UrlSerialiser {
    private static singleton: DefaultUrlSerializer;

    private constructor() { }

    static get instance() {
      if (this.singleton === null || this.singleton === undefined) this.singleton = new DefaultUrlSerializer();
      return this.singleton;
    }
  }
}

export const urlSerialiser = Singletons.UrlSerialiser.instance;
