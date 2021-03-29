import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Input() size = 50;
  @Input() isDiv = true;
  @Output() selectPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectItem() {
    this.selectPersonne.emit(this.cv);
  }
}
