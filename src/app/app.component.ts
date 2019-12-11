import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unit-test-angular';

  ngOnInit(): void {

    const calculator = new Calculator();
    const result = calculator.multiply(3, 3);
    const resultD = calculator.divide(6, 0);


    console.log(result === 9);
    console.log(resultD === 3);


  }
}
