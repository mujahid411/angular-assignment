// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SolvedComponent } from './solved/solved.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { Svg1Component } from '../svg-1/svg-1.component';
import { Svg2Component } from '../svg-2/svg-2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    LoginComponent,
    SignupComponent,
    SolvedComponent,
    LoginSuccessfulComponent,
    Svg1Component,
    Svg2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
