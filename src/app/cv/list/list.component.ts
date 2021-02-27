import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from './../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardSelectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Cv(
        2,
        'Hammami',
        'Khouloud',
        'ingénieur',
        'rotating_card_profile.png',
        123456,
        21
      ),
    ];
  }
  forwardCv(selectedCv: Cv) {
   this.forwardSelectedCv.emit(selectedCv);
  }
}
