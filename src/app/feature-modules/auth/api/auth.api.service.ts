import { Injectable } from '@angular/core';
import { UserRegisterInterface } from '../models/user-register.model';
import { UserLoginInterface } from '../models/user-login.model';
import { Observable, map, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ApiCoreService } from '@core/services/api/api.core.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private coreApi: ApiCoreService, 
  ) { }

  register(user: UserRegisterInterface): Observable<any>{
    return this.coreApi.authentication('register', user, true);
  }

  login(user: UserLoginInterface){}

}
