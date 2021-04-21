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

  getCvById(id: number): Cv {
    // '1' == 1 mais '1' !== 1
    return this.cvs.find((cv) => cv.id === id);
  }

  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1) {
      return false;
    }
    this.cvs.splice(index, 1);
    return true;
  }
}
