import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/test-service.service';
import { Product } from 'src/app/model/Product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/Category.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent  {
  categoryName = 'Televizoare';
  products: Product[] = [];
  isLoaded: boolean = false;
  categories_parent: Category[] = [];
  constructor(private test: TestServiceService, private router: Router, private route: ActivatedRoute){
    this.isLoaded = true;
    this.products = this.test.getProducts();
    this.categories_parent = this.test.getCategories();
    }

    setCategory(category: string){
      this.categoryName = category
    }
   
    
  }




