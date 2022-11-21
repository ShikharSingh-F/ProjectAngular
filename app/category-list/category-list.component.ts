import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category/category.component';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  
  @Input() categories: Category[];

  selectedCategory: Category;

  onSelect(category: Category) {
    this.selectedCategory = category;
  }

}
