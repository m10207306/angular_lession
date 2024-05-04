import { Component } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styles: [
  ]
})
export class Page4Component {
  SayHi() {
    alert("Hello");
  }

  onClick(element: string) {
    console.log(element)
  }

  onClick2(event: Event, element: string) {
    console.log(element);
    console.log(event.target);
    console.log(event.currentTarget);
  }
  
  onClick3(event: Event, element: string) {
    console.log(element);
    console.log(event.target);
    console.log(event.currentTarget);
    event.preventDefault();
    event.stopPropagation();
  }

  result: string = "0102";
  onchange(event: Event) {
    let selectElement: HTMLSelectElement = <HTMLSelectElement> event.target;
    console.log(selectElement.value);
    this.result = selectElement.value;
  }
}
