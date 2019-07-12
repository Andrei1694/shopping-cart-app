import { TestServiceService } from './../../../../test-service.service';
import { SearchedFilter } from './../../../../pipes/SearchFilter.pipe';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/Category.model';


@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css']
})
export class CategoryPanelComponent implements OnInit {

  @Input()
  categories: Category[] = [];
  cat: Category[] = [];
  
  constructor(private test: TestServiceService) { 
    this.cat = this.categories;
  }

  ngOnInit() {
  }

  searchCategory(event: any) {
   
  }

  setCategory(category: string) {
    this.test.setCategory(category)
  }

}
