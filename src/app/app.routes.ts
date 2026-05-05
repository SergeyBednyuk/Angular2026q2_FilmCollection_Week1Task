import { Routes } from '@angular/router';

import { FilmsListComponent } from "./films/films-list/films-list.component";
import { AboutComponent } from "./about/about.component";
import { FilmDetailsComponent } from "./films/film-details/film-details.component";

export const routes: Routes = [
    // Home page content
    { path: '', component: FilmsListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'films/:id', component: FilmDetailsComponent },
    { path: '**', redirectTo: '' },
];
