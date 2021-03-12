import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngif',
  templateUrl: './testngif.component.html',
  styleUrls: ['./testngif.component.css'],
})
export class TestngifComponent implements OnInit {
  cacher = false;
  constructor() {}

  ngOnInit(): void {}
  afficherCacher() {
    this.cacher = !this.cacher;
  }
}
