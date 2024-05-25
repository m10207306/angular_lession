import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})
export class ProductDetailComponent {
  id: number = 0;
  
  constructor(private route: ActivatedRoute) {}
  ngDoCheck(): void {
    let ID = this.route.snapshot.paramMap.get("id");
    this.id = Number(ID)
  }
}
