import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { loadAllSections } from 'src/app/store/actions';
import { sections } from 'src/app/store/selectors';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit {
  sectionList: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadAllSections());
    this.store.select(sections).subscribe((sections) => {
      this.sectionList = sections;
    });
  }
}
