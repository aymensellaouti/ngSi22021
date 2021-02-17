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
  inputContent = '';
  private _color = 'darkblue';
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

  get color() {
    return this._color;
  }

  set color(newColor: string) {
    this._color = newColor;
  }

  showInputContent(element) {
    this.inputContent = element;
  }
}
