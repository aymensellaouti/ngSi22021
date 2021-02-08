import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  /*
    attributs
    méthodes
  */
  source: string;
  isHidden = false;
  color = 'darkblue';
  message = 'Bonjour je suis le message contenu dans le ts';
  constructor() {}

  ngOnInit(): void {}
  sayHello() {
    alert('Hello');
  }
  afficherCacher() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
    this.color = 'red';
  }
}
