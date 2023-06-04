import { Component } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  templateUrl: './exerice1.component.html',
  styleUrls: ['./exerice1.component.css']
})
export class Exerice1Component {
  name: string = "AKOHOUE Samuel";

  public handleClick() {
    alert("Bonjour !");
  }
}
