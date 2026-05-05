import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from "@angular/router";

import { FilmService } from "../../services/film.service";
import { BreadcrumbModel } from "../../models/breadcrumb.model";


@Component({
    selector: 'app-breadcrumbs',
    imports: [
        RouterLink
    ],
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
    private destroyRef = inject(DestroyRef);
    private router = inject(Router);
    private currentUrl = signal(this.router.url);
    private filmService = inject(FilmService);

    constructor() {
        const subscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.set(event.urlAfterRedirects);
            }
        });
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }

    protected crumbs = computed<BreadcrumbModel[]>(() => {
        const url = this.currentUrl();

        if (url === '/') return [{ label: 'Home', url: url }];
        if (url === '/about') return [{ label: 'About', url: url }];
        if (url.startsWith('/films/')) {
            const id = url.split('/')[2];
            const film = this.filmService.getFilmById(Number(id));
            const label = film?.title ?? 'Film';
            return [{ label: 'Home', url: '/' }, { label: label, url: url }];
        }

        return [];
    });

}
