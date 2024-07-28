import { Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'section/home', pathMatch: 'full' },
  { path: 'section/:id', component: NewsComponent },
];
