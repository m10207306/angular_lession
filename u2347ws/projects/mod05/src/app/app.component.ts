import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = '購物車';
  QTY: number = 12;
  Stock:number = 10;

  // ngOnInit() {
  //   setTimeout(() => {     
  //     this.QTY = 21;
  //     console.log(`外部改變 QTY : ${this.QTY}`);
  //   }, 3000);
  // }

  @ViewChild("title1") h1: ElementRef | any;

  ngAfterViewInit() {
    console.log(`AppComponent ngAfterViewInit ${this.h1.nativeElement}`)
    let title1 = this.h1.nativeElement;
    title1.addEventListener("click", () => title1.innerHTML = "title1 + click event")
  }
  
  ngAfterViewChecked() {
    console.log(`AppComponent ngAfterViewChecked  ${this.h1.nativeElement}`)
  }

  vDate = new Date();
  vString = "This is a book";
  vMoney = 382140;
  vNumber = 39.85;
  vNumber2 = 31.11;
  vPercent = 10;

}
