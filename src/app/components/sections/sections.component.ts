import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { newsActions } from 'src/app/store/actions';
import { sections } from 'src/app/store/selectors';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class SectionsComponent implements OnInit {
  sectionList: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(newsActions.loadAllSections());
    this.store.select(sections).subscribe((sections) => {
      this.sectionList = sections;
    });
  }
}
