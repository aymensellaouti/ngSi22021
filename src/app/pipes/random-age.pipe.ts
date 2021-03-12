import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomAge',
})
export class RandomAgePipe implements PipeTransform {
  transform(numero: number, min: number = 1, max: number = 100): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
