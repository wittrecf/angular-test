import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  someFunction():string{
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += i + "-";
    }
    return x;
  }

}
