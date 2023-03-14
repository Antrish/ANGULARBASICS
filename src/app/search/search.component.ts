import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchValue:string = '';
searchBoxdata(searchboxdata :Event){
// console.log((<HTMLInputElement>searchboxdata.target).value);
this.searchValue =(<HTMLInputElement>searchboxdata.target).value;
}
}
