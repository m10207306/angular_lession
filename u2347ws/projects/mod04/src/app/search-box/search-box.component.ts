import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchBox',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent {
  @Input() searchText: string = "";
  @Output() searchTextChange = new EventEmitter<string>();

  onSearch(search:string) {
    this.searchText = search;
    this.searchTextChange.emit(this.searchText)
  }
}
