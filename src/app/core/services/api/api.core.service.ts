import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CSRF, LOGIN, REGISTER } from '@core/constants/auth/endpoints.consts';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  csrf(): Observable<any>{
    return this.http.get<any>(CSRF, { observe: 'response', withCredentials: true })
                    .pipe(
                      map(() => {
                        const headers =  new HttpHeaders({
                          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
                        });
                        return headers;
                      })
                    );
  }

  authentication(option: 'login' | 'register', data: any, withCredentials: boolean = true): Observable<any>
  {
    this.csrf().subscribe();
    switch (option){
      case 'login':
        return this.http.post<any>(LOGIN, data, { withCredentials: withCredentials });
        break;
      case 'register':
        return this.http.post<any>(REGISTER, data, { withCredentials: withCredentials });
        break;
    }
  }


}
