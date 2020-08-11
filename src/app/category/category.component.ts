import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  title="KATEGORİLER"
  categoryId=0;
  categories:Category[];
  ngOnInit() {
    this.categoryService.getCategory().subscribe(c=>this.categories=c);
  }
  SetCategoryProduct(){
    
  }
}
