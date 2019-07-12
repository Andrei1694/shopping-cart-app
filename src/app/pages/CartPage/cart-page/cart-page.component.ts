import { TestServiceService } from './../../../test-service.service';
import { Product } from './../../../model/Product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  
  private productList: Product[];
  constructor(private test: TestServiceService) {
      this.productList = this.test.cart;
   }

  ngOnInit() {
  }

}
