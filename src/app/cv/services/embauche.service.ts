import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private emabuachees: Cv[] = [];
  constructor() { }

  getEmbauchees(): Cv[] {
    return this.emabuachees;
  }

  embaucher(cv: Cv): Boolean {
    if (this.emabuachees.some(actualCv => actualCv === cv)) {
      return false;
    } else {
      this.emabuachees.push(cv);
      return true;
    }
  }
}
