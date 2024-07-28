import { inject } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { newsActions } from './actions';
import { map, switchMap } from 'rxjs';
import { NewsResponse } from '../model/news';

// @Injectable()
// export class NewsEffect {
//   constructor(
//     private actions$: Actions,
//     private store: Store<AppState>,
//     private newsService: NewsService
//   ) {}
//   loadNews$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadNews),
//       switchMap((action) =>
//         this.newsService
//           .getSectionNews(action.newsType)
//           .pipe(
//             map((value: NewsResponse) =>
//               loadedNews({ newsList: value.results })
//             )
//           )
//       )
//     )
//   );
// }

export const newsEffect = createEffect(
  (actions$ = inject(Actions), newsService = inject(NewsService)) => {
    return actions$.pipe(
      ofType(newsActions.loadNews),
      switchMap((action) => {
        return newsService
          .getSectionNews(action.newsType)
          .pipe(
            map((value: NewsResponse) =>
              newsActions.loadedSuccessfully({ newsList: value.results })
            )
          );
      })
    );
  },
  { functional: true }
);
