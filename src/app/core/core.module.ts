import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { RouterService } from './services/navigation/router.service';
import { LocalStorageService } from './services/storage/local.service';
import { ApiCoreService } from './services/api/api.core.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    RouterService,
    LocalStorageService,
    ApiCoreService
  ]
})
export class CoreModule { }
