import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor(private toaster: ToastrService) {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });

    observable.subscribe((val) => {
      console.log(val);
    });
    let som = 0;
    observable.subscribe(
      (data) => {
        console.log(`Je viens de sommer la valeur ${data}`);

        som += data;
      },
      (erreur) => console.log('erreur', erreur),
      () => console.log(`la somme est ${som}`)
    );
    observable.subscribe((data) => this.toaster.info('' + data));
  }
}
