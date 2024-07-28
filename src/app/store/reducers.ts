import { createFeature, createReducer, on } from '@ngrx/store';
// import { loadAllSections, loadedNews, updateNewsSubSection } from './actions';
import { AppState } from '.';
import { allSections } from '../services/selector-constant';
import { newsActions } from './actions';

export const initialState: AppState = {
  allNews: [],
  filterBySubsection: '',
  sections: [],
};

const newsFeature = createFeature({
  name: 'news',
  reducer: createReducer(
    initialState,
    on(newsActions.loadAllSections, (state) => {
      return {
        ...state,
        sections: allSections,
      };
    }),
    on(newsActions.loadedSuccessfully, (state, { newsList }) => {
      return {
        ...state,
        allNews: newsList,
        filterBySubsection: '',
      };
    }),
    on(newsActions.updatedNewsSubSection, (state, { subsection }) => {
      return {
        ...state,
        filterBySubsection: subsection,
      };
    })
  ),
});

export const {
  name: newsFeatureKey,
  reducer: newsReducer,
  selectAllNews,
  selectFilterBySubsection,
  selectSections,
} = newsFeature;
