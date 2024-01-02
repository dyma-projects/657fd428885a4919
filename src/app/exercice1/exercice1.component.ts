import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  // Déclaration de variables pour la liaison de données de type attribut
  public monImage =
    'https://www.cocktailmag.fr/media/k2/items/cache/063ee9aeb9f60efa02823e51450f82ce_M.jpg';

  // Déclaration de variable et de fonctions pour la liaison de données de type évènement
  public color = 'aqua';
  public changeColor(color: string) {
    this.color = color;
  }

  //Déclaration de variable pour la liaison de données de type interpolation
  public team = 'DYMA';
}
