import { createReducer, on } from '@ngrx/store';
import { loadAllSections, loadedNews, updateNewsSubSection } from './actions';
import { AppState } from '.';
import { allSections } from '../services/selector-constant';

export const initialState: AppState = {
  allNews: [],
  filterBySubsection: '',
  sections: [],
};

export const newsReducer = createReducer(
  initialState,
  on(loadAllSections, (state) => {
    return {
      ...state,
      sections: allSections,
    };
  }),
  on(loadedNews, (state, { newsList }) => {
    return {
      ...state,
      allNews: newsList,
      filterBySubsection: '',
    };
  }),
  on(updateNewsSubSection, (state, { subsection }) => {
    return {
      ...state,
      filterBySubsection: subsection,
    };
  })
);
