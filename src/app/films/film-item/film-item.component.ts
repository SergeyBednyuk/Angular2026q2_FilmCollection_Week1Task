import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { FilmModel } from "../../models/film.model";
import { FilmService } from "../../services/film.service";

@Component({
    selector: 'app-film-item',
    imports: [
        RouterLink
    ],
    templateUrl: './film-item.component.html',
    styleUrl: './film-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmItemComponent {
    private filmService = inject(FilmService);
    film = input.required<FilmModel>();

    onToggleFavorite(){
        this.filmService.markAsFavorite(this.film().id);
    }
}
