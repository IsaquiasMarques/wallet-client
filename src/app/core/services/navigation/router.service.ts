import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigate(location: string){
    this.router.navigate([location]);
  }
  
  redirect(location: string)
  {
    this.navigate(location);
  }

}
