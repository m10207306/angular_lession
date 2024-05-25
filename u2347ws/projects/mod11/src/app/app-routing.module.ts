import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "product", component: ProductComponent,
    children: [
      { path: "product/:id", component: ProductDetailComponent},
      { path: "promotion", component: PromotionComponent},
      { path: "popular", component: PopularComponent},
    ]
  },
  // { path: "product", component: ProductDetailComponent}, // 進不去
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
