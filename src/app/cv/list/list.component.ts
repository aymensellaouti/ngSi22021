import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from './../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardSelectedCv = new EventEmitter();
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }
  forwardCv(selectedCv: Cv) {
    this.forwardSelectedCv.emit(selectedCv);
  }
}
