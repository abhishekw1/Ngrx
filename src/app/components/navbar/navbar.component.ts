import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { updateNewsSubSection } from 'src/app/store/actions';
import { subSections } from 'src/app/store/selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  subsections: string[] = ['movie', 'tech', 'money'];
  response!: Object[];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(subSections).subscribe((subSections) => {
      this.subsections = subSections;
    });
  }

  dispatchAction($event: string) {
    this.store.dispatch(updateNewsSubSection({ subsection: $event }));
  }
}
