import { Component, OnInit } from '@angular/core';
import { APP } from '@core/config/app.config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  appName: string = APP.NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
