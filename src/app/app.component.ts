import { Component } from '@angular/core';
import { SectionsComponent } from './components/sections/sections.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SectionsComponent, HeaderComponent, NavbarComponent, RouterOutlet],
})
export class AppComponent {}
