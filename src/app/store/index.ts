import { News } from '../model/news';

export interface AppState {
  allNews: News[];
  filterBySubsection: string;
  sections: string[];
}
