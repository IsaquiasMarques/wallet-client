import { Injectable } from '@angular/core';
import { UserRegisterInterface } from '../models/user-register.model';
import { UserLoginInterface } from '../models/user-login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CSRF, REGISTER } from 'src/app/core/constants/auth/endpoints.consts';
import { Observable, map, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService  
  ) { }

  csrf_sanctum(): Observable<any>{
    return this.http.get<any>(CSRF, { observe: 'response' ,withCredentials: true });
  }

  user_register(user: UserRegisterInterface): Observable<any>{
    
    return this.csrf_sanctum().pipe(
      // tap(data => console.log(this.cookieService.get('XSRF-TOKEN'))),
      map(() => {
        const headers =  new HttpHeaders({
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        });
        return this.http.post<any>(REGISTER, user, { withCredentials: true, headers: headers }).subscribe(console.log)
      })
    );
  } 

  user_login(user: UserLoginInterface){}

}
