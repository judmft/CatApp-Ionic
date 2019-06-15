import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

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

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.USERS_API}/${userId}`);
  }

  createUser(user: User): Observable<User>{
    console.log(user)
      return this.http.post<User>(`${this.USERS_API}`, user);
      
  }
    
  

  //   userData: User,
  //   name: string,
  //   email: string,
  //   password:string
  // ): Observable<any> {
  //   const user: User = userData;
  //   user.name = name;
  //   user.email = email;
  //   user.password = password;
  //   return this.http.post(`${this.USERS_API}`, user);
  // }


}
