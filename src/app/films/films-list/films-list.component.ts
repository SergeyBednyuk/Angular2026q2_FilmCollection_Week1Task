import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FilmService } from "../../services/film.service";
import { FilmItemComponent } from "../film-item/film-item.component";

@Component({
    selector: 'app-films-list',
    imports: [
        FilmItemComponent
    ],
    templateUrl: './films-list.component.html',
    styleUrl: './films-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsListComponent {
    private filmsService = inject(FilmService);
    protected films = this.filmsService.films;
    protected isLoading = this.filmsService.isLoading;
}
