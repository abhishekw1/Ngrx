import { createAction, props } from '@ngrx/store';
import { News } from '../model/news';

export const loadAllSections = createAction(
  '[News] Load AllSections'
);
export const loadNews = createAction(
  '[News] Load News',
  props<{ newsType: string }>()
);

export const loadedNews = createAction(
  '[News] Loaded Successfully',
  props<{ newsList: News[] }>()
);

export const updateNewsSubSection = createAction(
  '[News] Updated News SubSection',
  props<{ subsection: string }>()
);
