/**
 * Main module file
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {TopNavComponent} from './shared/index';
import {FooterComponent} from './shared/index';
import { LoginModule } from './login/index';
import { HomeModule } from './home/index';
import { CustomMaterialModule } from './custom-material/index';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CustomMaterialModule,
    SharedModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TopNavComponent, FooterComponent]
})
export class AppModule { }
