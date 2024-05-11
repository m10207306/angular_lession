import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InTheBox]'
})
export class InTheBoxDirective {

  // 設定default參數的 HostListener
  @Input("InTheBox") borderStyle: string = ""
  
  // 再加上可以帶參數的 HostListener
  // @Input() borderStyle: string = ""
  @HostListener("mouseenter") onMouseEnter() {
    if (!this.borderStyle) {
      this.borderStyle = "solid 2px red"
    }
    this.putInTheBox(this.borderStyle);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.putInTheBox("none");
  }

  // 加上 HostListener
  // @HostListener("mouseenter") onMouseEnter() {
  //   this.putInTheBox("solid 2px red");
  // }

  // @HostListener("mouseleave") onMouseLeave() {
  //   this.putInTheBox("none");
  // }

  // x單傳 directive 練習
  constructor(private el: ElementRef) {
    // this.putInTheBox("solid 2px red");
  }

  private putInTheBox(borderStyle: string) {
    this.el.nativeElement.style.border = borderStyle;
  }
}
