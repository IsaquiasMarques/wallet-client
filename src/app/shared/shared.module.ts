import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from './services/error/error.service';
import { AlertWithListComponent } from './components/base/alerts/alert-with-list/alert-with-list.component';



@NgModule({
  declarations: [
    AlertWithListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AlertWithListComponent,
  ],
  providers: [
    ErrorService
  ]
})
export class SharedModule { }
