import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { loadNews } from 'src/app/store/actions';
import { allNewsDeatils } from 'src/app/store/selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  sectionNewsList: any;

  constructor(
    private store: Store<{ sections: any; news: any }>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.store.dispatch(loadNews({ newsType: params.get('id') }));
    });

    this.store.select(allNewsDeatils).subscribe((news) => {
      this.sectionNewsList = news.filter((news) => news.title !== '');
    });
  }
}
