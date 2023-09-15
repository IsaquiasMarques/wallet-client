import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/containers/account/account.component';
import { DashboardComponent } from './components/presentationals/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
