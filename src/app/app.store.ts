import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Sound } from './shared/models/sound';

export interface AppStoreSnapshot {
  sound ?: {
    [id: number]: Sound,
  };
}

@Injectable()
export class AppStore extends BehaviorSubject < AppStoreSnapshot > {

  private _snapshot: AppStoreSnapshot;

  get snapshot() {
    return this._snapshot;
  }

  constructor() {
    super({
      sound: {},
    });
    this.subscribe(snapshot => {
      this._snapshot = snapshot;
    });
  }

  patchValue(value: AppStoreSnapshot) {
    const snapshot = Object.assign({}, this._snapshot, value);
    this.next(snapshot);
  }
}
