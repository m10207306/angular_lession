import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Page1Component } from './part1/page1/page1.component';
import { Page2Component } from './part1/page2/page2.component';
import { Part2Component } from './part2/part2.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Page1Component,
    Page2Component,
    Part2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
