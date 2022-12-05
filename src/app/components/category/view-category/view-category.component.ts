import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categories:Category[] = []
  loader = true;
  constructor(private _categoryService:CategoryService) { }

  ngOnInit(): void {
    this.onDataProvidersTable()
  }
  onDataProvidersTable(){
    this._categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.loader = false;
    });
  }
}
