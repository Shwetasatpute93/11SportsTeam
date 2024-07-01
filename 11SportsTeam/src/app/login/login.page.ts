import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ModalOptions,  NavController } from '@ionic/angular';
import { OtpComponent } from './otp/otp.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {
  
  mobileNumber !: string;
  public turfForm : FormGroup;
  swipeToClose?: boolean;
  constructor(private route: Router,public fb : FormBuilder, private modalctrl: ModalController, private auth : AuthService) {

    this.turfForm = this.fb.group({
      mobileNumber : ['', Validators.required],
     
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 async navigateToOtpPage() {
    try {
      if (this.turfForm.valid) {
        console.log('Mobile Number:', this.turfForm.value.mobileNumber);
        const response = await this.auth.signInWithPhoneNumber('+91' + this.turfForm.value.mobileNumber);
        console.log('response', response);
        const options: ModalOptions = {
          component: OtpComponent,
          componentProps: {
            mobileNumber: this.turfForm.value.mobileNumber
          },
          // swipeToClose: true
        };
  
        const modal = await this.modalctrl.create(options);
        await modal.present();
        const { data } = await modal.onWillDismiss();

      }
    } catch (e) {
      console.error('Error navigating to OTP page:', e);
    }
  }

}
