import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/users.model';
import { Observable } from 'rxjs';
import { Missing } from './models/missing.model';
import { Resource } from './models/resource.model';


@Injectable({
  providedIn: 'root'
})
export class TabsService {

  USERS_API = 'http://api-catapp.herokuapp.com/api/v1/users';
  RESOURCES_API = 'http://api-catapp.herokuapp.com/api/v1/resources';
  MISSING_API = 'http://api-catapp.herokuapp.com/api/v1/missing_people';

  constructor(private http: HttpClient ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.USERS_API}`);
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.RESOURCES_API}`);
  }

  getMissingPeople(): Observable<Missing[]> {
    return this.http.get<Missing[]>(`${this.MISSING_API}`);
  }

}
