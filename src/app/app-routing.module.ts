// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignUp2Component } from './sign-up-2/sign-up-2.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { SolvedComponent } from './solved/solved.component';

export const routes: Routes = [
  { path: '', component: UserEntryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-successful', component: LoginSuccessfulComponent },
  { path: 'solved', component: SolvedComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sign-up-2', component: SignUp2Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
