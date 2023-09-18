import { Injectable } from "@angular/core";
import { AuthApiService } from "./api/auth.api.service";
import { UserLoginInterface } from "./models/user-login.model";
import { UserRegisterInterface } from "./models/user-register.model";
import { UserService } from "@core/services/user/user.service";
import { BehaviorSubject } from "rxjs";
import { ErrorService } from "@shared/services/error/error.service";

@Injectable({
  providedIn: 'root'
})

export class AuthFacade {

  loginSubscriber: any;
  userRegistered: any;

  registerIsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  registerHasErrors$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private auth_api: AuthApiService,
    private user: UserService,
    private Error: ErrorService
  ) { }

  login(user: UserLoginInterface){
    this.loginSubscriber = this.auth_api.login(user);
  }

  register(user: UserRegisterInterface){
    this.registerIsLoading$.next(true);
    this.auth_api.register(user).subscribe(
      {
        next: (response: any) => {
          // console.log(response)
          this.user.authenticate(response.data.user);
        },
        complete: () => {
          this.registerIsLoading$.next(false)
        },
        error: (errors: any) => {
          this.registerHasErrors$.next([errors.error.message ?? errors.message]);
          this.emptyErrorsAfterFewSeconds(40);
          this.registerIsLoading$.next(false);
        },
      }
    );
  }

  emptyErrorsAfterFewSeconds(time: number = 4){
    setTimeout(() => {
      this.registerHasErrors$.next([]);
    }, time * 1000);
  }

  unsubscribe(){
    this.loginSubscriber.unsubscribe();
  }

}