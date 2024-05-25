import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {
  constructor(private router: Router) {}
  
  GoProd2(id: number) {
    this.router.navigate(["/", "product", "product", id])
  }

  GoProd3(id: number) {
    this.router.navigateByUrl(`/product/product/${id}`)
  }
}
