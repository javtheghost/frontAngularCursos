import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: string;
  private endPoint: string;


  constructor(private http:HttpClient) {
    this.api = environment.apiCursos;
    this.endPoint = environment.endPointUsers;
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}${this.endPoint}`)
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}${this.endPoint}${id}`);
  }

  addUsers(user: User): Observable<void> {
    return this.http.post<void>(`${this.api}${this.endPoint}`, user);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.api}${this.endPoint}${id}`)
  }

  updateUser(id: string, user: User): Observable<void> {
    return this.http.put<void>(`${this.api}${this.endPoint}${id}`, user);
  }
}
