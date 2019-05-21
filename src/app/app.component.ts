import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  calculation = '';
  error = '';
  errorAccured = true;

  addCalc(char: string){
    if (char == '-1'){
      if (this.calculation == 'Infinity'){
        this.calculation = '';
      }
      this.calculation = this.calculation.slice(0, -1);
      return;
    }
    if (char == '-2'){
      this.calculation += '.';
      return;
    }
    if (char == '-3'){
      this.calculation += '*';
      return;
    }
    if (char == '-4'){
      this.calculation += '/';
      return;
    }
    if (char == '-5'){
      this.calculation += '+';
      return;
    }
    if (char == '-6'){
      this.calculation += '-';
      return;
    }
    this.calculation += char;
  }

  calc(){
    if (this.calculation == '' || this.calculation == 'undefined'){
      this.errorAccured = false;
      this.error = 'undefined';
      return;
    }
    try {
      this.calculation = eval(this.calculation);
      this.calculation += '';
      this.errorAccured = true;
      this.error = '';
    }catch(err){
      this.errorAccured = true;
      this.error = err.message;
    }
  }
}
