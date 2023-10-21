import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '.';
import { NewsService } from '../services/news.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadNews, loadedNews } from './actions';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { NewsResponse } from '../model/news';

@Injectable()
export class NewsEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private newsService: NewsService
  ) {}
  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNews),
      switchMap((action) =>
        this.newsService
          .getSectionNews(action.newsType)
          .pipe(
            map((value: NewsResponse) =>
              loadedNews({ newsList: value.results })
            )
          )
      )
    )
  );
}
