import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdServiceService } from './prod-service.service';
import { AppComponent } from './app.component';
import { ProdSearchComponent } from './prod-search/prod-search.component';
import { NumbersOnlyDirective } from './prod-search.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    ProdSearchComponent,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers:[
    ProdServiceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
