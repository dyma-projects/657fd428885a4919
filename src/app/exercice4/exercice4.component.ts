import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css'],
})
export class Exercice4Component {
  public texts: Array<{ number: string }> = [
    { number: '1' },
    { number: '2' },
    { number: '3' },
  ];
}
