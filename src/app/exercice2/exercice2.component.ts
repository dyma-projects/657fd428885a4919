import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  // Affichage de "click" en console du navigateur
  public displayClick() {
    console.log('click');
  }

  constructor() {}

  ngOnInit() {}
}
