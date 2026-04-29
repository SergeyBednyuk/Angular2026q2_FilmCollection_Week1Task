import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbsComponent } from "./shared/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-root',
    imports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FilmCollectionApp');
}
