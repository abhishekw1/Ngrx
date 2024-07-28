import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { newsActions } from 'src/app/store/actions';
import { allNewsDeatils } from 'src/app/store/selectors';
import { NewsItemComponent } from './news-item/news-item.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [NewsItemComponent],
})
export class NewsComponent implements OnInit {
  sectionNewsList: any;

  constructor(
    private store: Store<{ sections: any; news: any }>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.store.dispatch(newsActions.loadNews({ newsType: params.get('id') }));
    });

    this.store.select(allNewsDeatils).subscribe((news) => {
      this.sectionNewsList = news.filter((news) => news.title !== '');
    });
  }
}
