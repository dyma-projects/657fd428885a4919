import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component {
  //Initialisation de l'attribut status à true
  public status: boolean = true;
  public inverserStatus() {
    this.status = !this.status;
  }
}
