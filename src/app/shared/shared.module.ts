import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoundStore } from './stores/sound.store';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: RootSharedModule,
    };
  }
}

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [
    SoundStore,
  ],
})
export class RootSharedModule {
}
