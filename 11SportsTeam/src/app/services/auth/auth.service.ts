import { Injectable } from '@angular/core';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appVerifier: any;
  private confirmationResult: any;

  constructor(private afAuth: Auth) {}

  recaptcha() {
    this.appVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response: any) => {
        console.log(response);
      }
    }, this.afAuth); // Use afAuth.auth to pass the Auth instance
  }

  async signInWithPhoneNumber(phoneNumber: string) {
    try {
      if (!this.appVerifier) this.recaptcha();
      const confirmationResult = await signInWithPhoneNumber(this.afAuth, phoneNumber, this.appVerifier);
      this.confirmationResult = confirmationResult;
      return confirmationResult;
    } catch (e) {
      throw e;
    }
  }

  async verifyOtp(otp: string) {
    try {
      if (!this.appVerifier) this.recaptcha();
      const result = await this.confirmationResult.confirm(otp);
      console.log(result);
      const user = result?.user;
      console.log(user);
    } catch (e) {
      throw e;
    }
  }
}
