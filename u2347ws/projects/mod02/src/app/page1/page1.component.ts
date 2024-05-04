import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component {
  // member = [];
  
  member = [
    "Jenny",
    "Vivid",
    "Kity",
    "Linda",
  ];

  getName(idx: number): string {
    if (idx < 0 || idx > this.member.length-1) {
      return "索引超出範圍"
    }
    return this.member[idx]
  }
}
