import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'otp',
    component : OtpComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
