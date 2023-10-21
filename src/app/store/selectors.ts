import { createFeatureSelector, createSelector } from '@ngrx/store';
import { News } from '../model/news';
import { AppState } from '.';

const newsSelector = createFeatureSelector<AppState>('news');

export const allNews = createSelector(
  newsSelector,
  (state: AppState) => state.allNews
);
export const filterBySubsection = createSelector(
  newsSelector,
  (state: AppState) => state.filterBySubsection
);
export const sections = createSelector(
  newsSelector,
  (state: AppState) => state.sections
);

export const allNewsDeatils = createSelector(
  allNews,
  filterBySubsection,
  (allNews: News[], filterBySubsection: string) => {
    if (allNews && filterBySubsection) {
      return allNews.filter((news: News) => news.subsection === filterBySubsection);
    } else {
      return allNews;
    }
  }
);

export const subSections = createSelector(allNews, (news) => {
  return [...new Set(news.map((res) => res.subsection))];
});
