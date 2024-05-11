import { Component } from '@angular/core';
import { Student, students } from '../student';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styles: [
  ]
})
export class Page7Component {
  students: Student[] = students;
  thisMonth: number;
  constructor() {
    this.thisMonth = 11;  // 此數值為 index, 從 0 開始
    // this.thisMonth = new Date(Date.now()).getMonth();
  }
}
