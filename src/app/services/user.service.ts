import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = environment.apiCursos;
  private endPoint = environment.endPointUsers;

  constructor(private http:HttpClient) {}


  getProviders():Observable<User[]>{
    let direccion = this.api + this.endPoint
    return this.http.get<User[]>(direccion)

  }
}
