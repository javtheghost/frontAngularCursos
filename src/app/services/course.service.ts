import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private api = environment.apiCursos;
  private endPoint = environment.endPointCursos;

  constructor(private http:HttpClient) {}

  getCourses():Observable<Course[]>{
    let direccion = this.api + this.endPoint
    return this.http.get<Course[]>(direccion)

  }
}
