import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        if (value <= 0) return '0h 0min';

        const hours = Math.floor(value / 60);
        const minutes = value % 60;
        return `${hours}h ${minutes}min`;
    }
}
