import { Component, inject } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page2',
  template: `
    <p>
      page2 works!
    </p>
    <h1> {{s1.a}} </h1>
    <button (click)="Display()"> Display() </button>
  `,
  styles: [
  ]
})
export class Page2Component {
  // 寫法1: 較新
  s1 = inject(Service1Service)   // 新寫法
  constructor() {
    this.s1.a = "data2";
  }
  
  // 寫法2: 較舊, 當要inject的service太多可能constructor會跟很多參數
  // constructor(public s1: Service1Service) {
  //   s1.a = "data2";
  // }

  ngOnInit(): void {}

  Display() {
    console.log("form page2: " + this.s1.a);
  }
}
