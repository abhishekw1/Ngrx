import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateCounter } from './ngrx/state';
import { DECREMENT, INCREMENT, UPDATE_COUNTER_AFTER_DEALY } from './ngrx/action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<StateCounter>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter: any) => {
      this.counter = counter.counter;
    });
  }
  onIncerment() {
    this.store.dispatch({ type: UPDATE_COUNTER_AFTER_DEALY });
  }
  onDecrement() {
    this.store.dispatch({ type: DECREMENT });
  }
}
