import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { FilmModel } from "../../models/film.model";

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
    film = input.required<FilmModel>();
}
