import { Injectable } from '@angular/core';
import { NewsResponse } from '../model/news';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Data } from 'src/data/data';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getSectionNews(sectionName: string): Observable<NewsResponse> {
    const news = Data.filter((data) => data.section === sectionName)[0];
    return of(news.news);
  }
}
