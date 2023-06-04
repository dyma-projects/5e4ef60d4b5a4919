import { Component } from '@angular/core';

@Component({
  selector: 'app-exerice3',
  templateUrl: './exerice3.component.html',
  styleUrls: ['./exerice3.component.css']
})
export class Exerice3Component {

  status : boolean = true;

  public handleButtonClick() {
    this.status = !this.status;
  }
}
