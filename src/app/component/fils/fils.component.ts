import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() myFavoriteColor = 'red';
  @Input() message = '';
  @Output() sendDataToDad = new EventEmitter();
  constructor() {}

  /*
    1- Créer un événement
    2- Y mettre les données
    3- Envoyer (emettre) l'événement
  */

  ngOnInit(): void {}

  emitEvent() {
    this.sendDataToDad.emit({
      message: this.message,
      fc: this.myFavoriteColor,
      note: 20,
    });
  }
}
