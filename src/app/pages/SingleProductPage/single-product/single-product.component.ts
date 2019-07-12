import { TestServiceService } from 'src/app/test-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit, OnDestroy {
  
  product: Product
  private index: number;
  private sub: any;
  constructor(private test: TestServiceService, private route: ActivatedRoute) { 
    
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.index = +params['id']
      }
    )
    this.product = this.test.getProduct(this.index)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addProductToCart() {
    this.test.addProductToCart(this.product);
  }


}
