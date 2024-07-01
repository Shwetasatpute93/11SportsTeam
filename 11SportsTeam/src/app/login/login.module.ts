import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { NgOtpInputModule } from  'ng-otp-input';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    NgOtpInputModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage,OtpComponent]
})
export class LoginPageModule {}
