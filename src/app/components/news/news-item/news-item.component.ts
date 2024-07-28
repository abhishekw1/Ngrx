import { Component, OnInit, Input } from '@angular/core';

import { News } from '../../../model/news';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage],
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: News;
  @Input() id: number;
  url: string;
  constructor() {}

  ngOnInit() {
    // console.log(this.newsItem);
  }
}
