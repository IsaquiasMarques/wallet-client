import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// interface ErrorInterface{
//   from: string,
//   data: any[]
// }

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  private errors: any[] = [];
  public errors$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }

  add(from: any, data: any)
  {
    this.errors[from] = data;
  }

  all()
  {
    return this.errors$.next(this.errors);
  }

  get(resolver: any)
  {
    return this.errors$.next(this.errors[resolver]);
  }

  getWithTimer(resolver: any, waitForSeconds: number = 4)
  {
    this.errors$.next(this.errors[resolver]);
    this.timer(resolver, waitForSeconds);
  }

  timer(resolver: any, timeout: number){
    setTimeout(() => {
      this.errors[resolver] = []
      this.errors$.next(this.errors[resolver]);
    }, timeout * 1000);
  }

}
