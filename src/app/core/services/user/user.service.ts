import { Injectable } from '@angular/core';
import { RouterService } from '../navigation/router.service';
import { LocalStorageService } from '../storage/local.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private navigation: RouterService,
    private storage: LocalStorageService
  ) { }

  authenticate(user: any)
  {
    this.storage.add('user', JSON.stringify(user));
    this.navigation.redirect('/account/dashboard');
  }

}
