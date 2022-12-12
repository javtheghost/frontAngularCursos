import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { environment } from '../../environments/environment';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api: string;
  private endPoint: string;
  constructor(private http:HttpClient) {
    this.api = environment.apiCursos;
    this.endPoint = environment.endPointCategories;
  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}${this.endPoint}`)
  }

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}${this.endPoint}${id}`);
  }

  addCategory(category: Category): Observable<void> {
    return this.http.post<void>(`${this.api}${this.endPoint}`, category);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.api}${this.endPoint}${id}`)
  }

  updateCategory(id: string, category: Category): Observable<void> {
    return this.http.put<void>(`${this.api}${this.endPoint}${id}`, category);
  }
}
