import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  messageToFiston = 'cc fiston';
  constructor() {}

  /*
    1- ecouter sur l'event sendDataToDad
    2- des qu'on entend on récupére les data
    3- On exucte le traitement
  */
  ngOnInit(): void {}

  recieveDataFromSon(message: object) {
    console.log(message);
  }
}
