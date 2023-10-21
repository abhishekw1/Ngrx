/***** Modules *****/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
/***** Components *****/
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsItemComponent } from './components/news/news-item/news-item.component';
import { SectionsComponent } from './components/sections/sections.component';

/***** Services *****/
import { NewsService } from './services/news.service';
import { routes } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { newsReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffect } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    NavbarComponent,
    NewsItemComponent,
    SectionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ news: newsReducer }),
    EffectsModule.forRoot([NewsEffect]),
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
