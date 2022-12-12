import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private api: string;
  private endPoint: string;

  constructor(private http:HttpClient) {
    this.api = environment.apiCursos;
    this.endPoint = environment.endPointCursos;
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}${this.endPoint}`)
  }

  deleteCourse(_id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}${this.endPoint}${_id}`);
  }

  addCourse(course: Course): Observable<void> {
    return this.http.post<void>(`${this.api}${this.endPoint}`, course);
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.api}${this.endPoint}${id}`)
  }

  updateCourse(id: string, course: Course): Observable<void> {
    return this.http.put<void>(`${this.api}${this.endPoint}${id}`, course);
  }
}
