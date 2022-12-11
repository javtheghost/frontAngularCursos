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
  private api = environment.apiCursos;
  private endPoint = environment.endPointCategories;
  constructor(private http:HttpClient) { }


  getCategories():Observable<Category[]>{
    let direccion = this.api + this.endPoint
    return this.http.get<Category[]>(direccion)

  }

  deleteCategory(id: number): Observable<void> {
    let direccion = this.api + this.endPoint
    return this.http.delete<void>(direccion);
  }

  addPersona(course: Course): Observable<void> {
    let direccion = this.api + this.endPoint

    return this.http.post<void>(direccion, course);
  }



  updatePersona(id: number, course: Course): Observable<void> {
    let direccion = this.api + this.endPoint

    return this.http.put<void>(direccion, course);
  }
}
