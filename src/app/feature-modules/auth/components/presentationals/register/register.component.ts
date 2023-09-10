import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegisterInterface } from '../../../models/user-register.model';
import { AuthFacade } from '../../../auth.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(
    public authFacade: AuthFacade
  ) { }
  
  registerGroup: any;

  ngOnInit(): void {
    this.registerGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    const username = this.registerGroup.get('email').value.split('@')[0];
    const id_user_plan = 1;

    const user: UserRegisterInterface = {
      email: this.registerGroup.get('email').value,
      username: username,
      password: this.registerGroup.get('password').value,
      id_user_plan: id_user_plan
    };

    this.authFacade.register(user);

  }

}


