import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { mainStoreReducer } from './ngrx/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from './ngrx/effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: mainStoreReducer }),
    EffectsModule.forRoot([CounterEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
