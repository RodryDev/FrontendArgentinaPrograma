import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'

})
export class LoginService {

  private url = "https://portfolio-rodrigo.herokuapp.com/api/user/";

  constructor(private http: HttpClient, private cookies: CookieService) { }


  
//Escribo el user

  login(User: any): Observable<any> {
    return this.http.post(this.url+"login",User);
  }

//traiga uno solo

  getUser(id:number):Observable<any>{ 
    return this.http.get(this.url+id); 
  }

  //token... ahora ID

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }
  
  deleteToken(){
    this.cookies.delete("token");
    
  }

  getUserLogged() {
    const token = this.getToken();
    return token;
  }



}
