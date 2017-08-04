import { DefaultUrlSerializer } from '@angular/router';

namespace Singletons {
  export class UrlSerialiser {
    private static instance: DefaultUrlSerializer;

    private constructor() { }

    static get Instance() {
      if (this.instance === null || this.instance === undefined) {
        this.instance = new DefaultUrlSerializer();
      }
      return this.instance;
    }
  }
}

export const urlSerialiser = Singletons.UrlSerialiser.Instance;
