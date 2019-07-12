import { TestServiceService } from './../../../../test-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() prodCard: Product;

  constructor(private router: Router, private test: TestServiceService) {

  }

  ngOnInit() {
    
  }

  goTo(id: number){
    this.router.navigate(['/product',this.prodCard.id])
  }

  addProductToCart(){
    this.test.addProductToCart(this.prodCard)
  }

}
