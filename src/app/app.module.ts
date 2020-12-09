import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { HeroComponent } from './hero/hero.component';
import { P404Component } from './p404/p404.component';
import { LogoutComponent } from './logout/logout.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { AddbudgetComponent } from './addbudget/addbudget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { ServerService } from './server.service';
//import { AuthInterceptor } from './AuthInterceptor';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    DashboardComponent,
    HomepageComponent,
    SignupComponent,
    HeroComponent,
    P404Component,
    LogoutComponent,
    PiechartComponent,
    DonutchartComponent,
    BarchartComponent,
    AddbudgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ DataService, AuthenticationService, ServerService,
  //{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
