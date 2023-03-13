import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
producsts= [
{id:1, name:'Minimalist Analog watch', price:'1099',color:'Black', availbility:'availble', image:'assets/product/minimalist-analog-watch.jpg'},
{id:1, name:'Apple iPhone 14', price:'61099',color:'Matt Blue', availbility:'NOT-Availble', image:'assets/product/apple-iphone.jpg  '},
{id:1, name:'Dell Inspiron 127 Ryzen', price:'85000',color:'Gray Silver', availbility:'availble', image:'assets/product/dell-inspiron-one-27-ryzen-7.jpg'},
{id:1, name:'Mi Ultra HD 43 inc TV', price:'31099',color:'Graphite Gray', availbility:'availble', image:'assets/product/mi-ultrahd-tv.jpg'},
{id:1, name:'Whirpool 7 Kg Fully Automatic', price:'20109',color:'Metal Black', availbility:'availble', image:'assets/product/whirpool-7-kg-wahing-machine.jpg'},
{id:1, name:'Whirpool Refrigerator Double Door', price:'30000',color:'Silver', availbility:'NOT-Availble', image:'assets/product/whirpool-refrigerator.jpg'}
];
}
