import { Component } from '@angular/core';
import { Picture, picture } from '../picture';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component {
  pic = picture;
  pics: Picture[];

  constructor() {
    this.pics = [
      picture,
      new Picture(2, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shiba_Inu_in_Lafayette%2C_Indiana%2C_USA.jpg/180px-Shiba_Inu_in_Lafayette%2C_Indiana%2C_USA.jpg", "Black Shiba Inu", "Wikipedia"),
      new Picture(3, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Shiba_Inu_cream.jpg/180px-Shiba_Inu_cream.jpg", "White Shiba Inu", "Wikipedia"),
      new Picture(4, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Fm_shiba_inu_puppy.jpg/180px-Fm_shiba_inu_puppy.jpg", "Puppy Shiba Inu", "Wikipedia"),
    ]
  }
}
