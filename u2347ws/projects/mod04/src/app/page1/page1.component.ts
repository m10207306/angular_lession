import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component {
  title = "屬性綁定"
  picURL = "https://www.uuu.com.tw/Public/content/edm/180921_brochure/img/Brochure201811_title.svg";
  isDisable = true;
}
