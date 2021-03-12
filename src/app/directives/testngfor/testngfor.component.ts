import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  templateUrl: './testngfor.component.html',
  styleUrls: ['./testngfor.component.css']
})
export class TestngforComponent implements OnInit {

  series = [
    {name: 'friends', type: 'comedie'},
    {name: 'Big bang theory', type: 'comedie'},
    {name: 'Swat', type: 'policière'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
