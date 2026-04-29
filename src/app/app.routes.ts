import { Routes } from '@angular/router';

import { FilmsListComponent } from "./films/films-list/films-list.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
    // Home page content
    { path: '', component: FilmsListComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', redirectTo: ''},
];
