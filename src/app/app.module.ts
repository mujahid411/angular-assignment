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

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    LoginComponent,
    SignupComponent,
    SolvedComponent,
    LoginSuccessfulComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to the imports array
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
