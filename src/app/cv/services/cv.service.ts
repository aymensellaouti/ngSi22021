import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { APIS } from '../../constantes/apis';
import { DeleteResponseDto } from '../dto/delete-response.dto';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Cv(2, 'Hammami', 'Khouloud', 'ingénieur', '    ', 123456, 21),
      new Cv(3, 'Bakhouche', 'Yasser', 'ingénieur', '', 123456, 21),
    ];
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getFakeCvById(id: number): Cv {
    // '1' == 1 mais '1' !== 1
    return this.cvs.find((cv) => cv.id === id);
  }
  getCvById(id: number): Observable<Cv> {
    // '1' == 1 mais '1' !== 1
    return this.http.get<Cv>(APIS.cv + id);
  }
  deleteCv(id: number): Observable<DeleteResponseDto> {
   /*  const params = new HttpParams().set(
      'access_token',
      localStorage.getItem('token')
    ); */
    // '1' == 1 mais '1' !== 1
    return this.http.delete<DeleteResponseDto>(APIS.cv + id);
  }

  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1) {
      return false;
    }
    this.cvs.splice(index, 1);
    return true;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APIS.cv);
  }

  addCv(cv: Cv): Observable<Cv> {
    /* const headers = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token')
    ); */
    return this.http.post<Cv>(APIS.cv, cv);
  }
}
