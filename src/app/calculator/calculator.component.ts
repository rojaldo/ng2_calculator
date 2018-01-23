import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display = '';
  constructor() { }

  ngOnInit() {
  }

  numberPressed(input: number) {
    this.display = this.display + input;
  }

  symbolPressed(symbol: string) {
    this.display = this.display + symbol;
  }

}
