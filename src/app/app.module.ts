import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';

import { SharedModule } from './shared/shared.module';

import { AppStore } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
