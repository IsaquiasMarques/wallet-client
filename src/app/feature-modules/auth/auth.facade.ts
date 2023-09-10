import { Injectable } from "@angular/core";
import { AuthApiService } from "./api/auth.api.service";
import { UserLoginInterface } from "./models/user-login.model";
import { UserRegisterInterface } from "./models/user-register.model";
import { UserService } from "@core/services/user.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthFacade {

  loginSubscriber: any;
  userRegistered: any;

  registerIsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  registerHasErrors$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(
    private auth_api: AuthApiService,
    private user: UserService
  ) { }

  login(user: UserLoginInterface){
    this.loginSubscriber = this.auth_api.user_login(user);
  }

  register(user: UserRegisterInterface){
    this.registerIsLoading$.next(true);
    this.auth_api.user_register(user).subscribe(
      {
        next: (response: any) => {
          console.log(response)
        },
        complete: () => {
          this.registerIsLoading$.next(false)
        },
        error: (errors: any) => {
          this.registerHasErrors$.next(errors)
          console.log(errors.error);
        },
      }
    );
    // console.log(this.userRegistered);
    // this.user.authenticate(this.userRegistered);
  }

  unsubscribe(){
    this.loginSubscriber.unsubscribe();
  }

}