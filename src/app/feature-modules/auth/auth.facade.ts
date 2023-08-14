import { Injectable } from "@angular/core";
import { AuthApiService } from "./api/auth.api.service";
import { UserLoginInterface } from "./models/user-login.model";
import { UserRegisterInterface } from "./models/user-register.model";

@Injectable({
  providedIn: 'root'
})

export class AuthFacade {

  constructor(private auth_api: AuthApiService) { }

  login(user: UserLoginInterface){
    this.auth_api.user_login(user);
  }

  register(user: UserRegisterInterface){
    this.auth_api.user_register(user).subscribe((response: any) => {
      // console.log(response)
    });
  }

}