import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() width = 50;
  @Input() heigth = 50;
  @Input() timer = 1000;
  path = 'rotating_card_profile3.png';
  sliderSubscription: Subscription;
  @Input() paths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  sliderObservable: Observable<string>;
  constructor() {}
  ngOnDestroy(): void {
    this.sliderSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.sliderObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.timer);
    });
    this.sliderSubscription = this.sliderObservable.subscribe((newPath) => (this.path = newPath));
  }
}
