import { Component, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'CheckStock',
  templateUrl: './check-stock.component.html',
  styles: [
  ]
})
export class CheckStockComponent {
  @Input() Stock: number = 0;
  @Input() QTY: number = 0;

  info = "";
  lower = false;

  ngOnChanges() {
    // this.lower = (this.Stock < this.QTY);
    // this.info = this.lower ? `低於庫存, 目前只有 ${this.Stock}`: "";
    console.log(`ngOnChanges - ${this.Stock} ${this.QTY}`);
  }

  ngDoCheck() {
    this.lower = (this.Stock < this.QTY);
    this.info = this.lower ? `低於庫存, 目前只有 ${this.Stock}`: "";
    console.log(`ngDoCheck - ${this.Stock} ${this.QTY}`);
  }

  GetStock() {
    this.Stock = 20;
    console.log(this.Stock);
  }

  @ContentChildren("span") spans:any;

  ngAfterContentInit() {
    console.log("ngAfterContentInit")
    this.spans.forEach((element: any) => {
      console.log("\t", element)
    })
  }
  
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
    this.spans.forEach((element: any) => {
      console.log("\t", element)
    })
  }
}
