import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Cv(2, 'Hammami', 'Khouloud', 'ingénieur', '    ', 123456, 21),
      new Cv(3, 'Bakhouche', 'Yasser', 'ingénieur', '', 123456, 21),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
