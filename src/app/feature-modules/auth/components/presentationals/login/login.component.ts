import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
    }
  }

}
