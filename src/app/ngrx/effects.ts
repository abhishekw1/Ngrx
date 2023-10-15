// counter.effect.ts

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UPDATE_COUNTER_AFTER_DEALY, INCREMENT } from './action';

@Injectable()
export class CounterEffect {

  constructor(private actions$: Actions) {}

  updateCounterEffect$ = createEffect(() => this.actions$.pipe(
    ofType(UPDATE_COUNTER_AFTER_DEALY),
    switchMap(() => timer(5000).pipe( // Adjust the delay as needed
      map(() => ({ type: INCREMENT }))
    ))
  ));
}
