import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

export const routes: Routes = [
  {path: "p1", component: Page1Component, title: "HTML Binding"},
  {path: "p2", component: Page2Component, title: "DOM Binding"},
  {path: "p3", component: Page3Component, title: "Class Binding"},
  {path: "p4", component: Page4Component, title: "Event Binding"},
  {path: "p5", component: Page5Component, title: "ngModel"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
