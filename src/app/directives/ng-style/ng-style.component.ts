import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  @Input() color = 'red';
  @Input() bgc = 'yellow';
  @Input() size = '50px';
  constructor() {}

  ngOnInit(): void {}
}
