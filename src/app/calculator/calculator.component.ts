import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display = '';
  operator = '';
  blank = true;
  firstFigureState = false;
  secondFigureState = false;
  resolvedState = false;
  firstFigure = 0;
  secondFigure = 0;
  constructor() { }

  ngOnInit() {
  }

  numberPressed(input: number) {
    if (this.resolvedState) {
      this.display = '';
      this.resolvedState = false;
      this.blank = true;
    }
    if (this.blank) {
      this.firstFigure = this.firstFigure + input;
      this.blank = false;
      this.resolvedState = false;
      this.firstFigureState = true;
    } else if (this.firstFigureState) {
      this.firstFigure = 10 * this.firstFigure + input;
    } else if (this.secondFigureState) {
      this.secondFigure = 10 * this.secondFigure + input;
    }
    this.display = this.display + input;
  }

  symbolPressed(symbol: string) {
    if (this.firstFigureState) {
      if ((symbol !== '=') && (symbol !== '.')) {
        this.operator = symbol;
        this.display = this.display + symbol;
        this.secondFigureState = true;
        this.firstFigureState = false;
      }
    } else if (this.secondFigureState) {
      if (symbol === '=') {
        this.display = this.display + symbol;
        this.resolve();
      }
    }
  }

  resolve () {
    let result: number;
    if (this.operator === '+') {
      result = this.firstFigure + this.secondFigure;
    } else if (this.operator === '-') {
      result = this.firstFigure - this.secondFigure;
    } else if (this.operator === '*') {
      result = this.firstFigure * this.secondFigure;
    } else if (this.operator === '/') {
      result = this.firstFigure / this.secondFigure;
    }
    this.display = this.display + result;
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.resolvedState = true;
    this.secondFigureState = false;
  }

}
