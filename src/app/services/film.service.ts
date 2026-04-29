import { Injectable, signal } from '@angular/core';

import { FilmModel} from "../models/film.model";

@Injectable({
    providedIn: 'root',
})
export class FilmService {
    films = signal<FilmModel[]>([]);

    constructor() {
        this.loadFilms().then(result => this.films.set(result));
    }



    private async loadFilms(): Promise<FilmModel[]> {
        try {
            const response = await fetch('/data/films.json');

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data: FilmModel[] = await response.json();
            console.log('Films loaded successfully!', data);
            return data;
        } catch (error) {
            console.error('Failed to load films', error);
            return [];
        }
    }
}
