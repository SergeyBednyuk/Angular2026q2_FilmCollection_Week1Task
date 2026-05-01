import { computed, Injectable, signal } from '@angular/core';

import { FilmModel } from "../models/film.model";

@Injectable({
    providedIn: 'root',
})
export class FilmService {
    private _films = signal<FilmModel[]>([]);
    films = this._films.asReadonly();
    favoriteFilms = computed(() => this._films().filter((f) => f.isFavorite));
    private _isLoading = signal(true);
    isLoading = this._isLoading.asReadonly();

    constructor() {
        this.loadFilms().then(result => {
            this._films.set(result);
            this._isLoading.set(false);
        });
    }

    getFilmById(filmId: number): FilmModel | undefined {
        return this._films().find((film) => film.id === filmId);
    }

    markAsFavorite(filmId: number): void {
        this._films.update((films) => {
            return films.map((film) =>
                film.id === filmId ? { ...film, isFavorite: !film.isFavorite } : film
            );
        });
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
