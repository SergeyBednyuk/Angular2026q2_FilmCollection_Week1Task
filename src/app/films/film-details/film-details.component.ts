import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

import { FilmService } from "../../services/film.service";
import { DurationPipe } from "../../pipes/duration.pipe";

@Component({
    selector: 'app-film-details',
    imports: [
        DurationPipe
    ],
    templateUrl: './film-details.component.html',
    styleUrl: './film-details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmDetailsComponent {
    private filmService = inject(FilmService);
    private router = inject(Router);
    protected isLoading = this.filmService.isLoading;
    protected id = input.required<string>();

    protected film = computed(() =>
        this.filmService.getFilmById(Number(this.id()))
    );

    protected onGoBack() { this.router.navigate(['/']); }
}
