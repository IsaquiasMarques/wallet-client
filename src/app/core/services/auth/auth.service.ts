import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  csrfEndpoint: string = `${environment.apiServer}/sanctum/csrf-cookie`;
  testEndpoint: string = `${environment.apiServer}/api/not-authenticated`;
  registerEndpoint: string = `${environment.apiServer}/api/auth/register`;

  constructor(
    private http: HttpClient
  ) { }

  csrf_token(){
    return this.http.get(this.csrfEndpoint, { observe: 'response', withCredentials: true });
  }

  register(user: any){
    this.csrf_token().pipe(
      tap((data: any) => console.log(data))
    );
    return this.http.post<any>(this.registerEndpoint, user, { withCredentials: true });
  }

}
