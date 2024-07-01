import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ModalOptions, ToastController } from '@ionic/angular';
import { DashboardPage } from 'src/app/dashboard/dashboard.page';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent  implements OnInit {

  @Input() mobileNumber: any;
  public otp!: string;
  config = {
    length : 6,
    allowNumbersOnly: true,
    inputClass : 'otp-input-style'
  }
  constructor( private auth : AuthService,private modalctrl: ModalController, public router : Router, public toastController: ToastController ) { }

  ngOnInit() {}

  onOtpChange(event:any){
    this.otp = event;
    console.log(this.otp);
  }

  async resend(){
    try{

      const response = await this.auth.signInWithPhoneNumber('+91' + this.mobileNumber);
        console.log('response', response);

    }catch(e){
      console.log(e);
    }
  }

  async verifyOtp(){
    try{

      const response = await this.auth.verifyOtp(this.otp);
      if(response == undefined){
        const toast = await this.toastController.create({
          color: 'success',
          duration: 2000,
          message: 'Details Saved successfully',
          
        });
    
        await toast.present();
        this.router.navigate(['/dashboard']);
        const options: ModalOptions = {
          component: DashboardPage,
         
          // swipeToClose: true
        };
  
        const modal = await this.modalctrl.create(options);
        await modal.present();
        const { data } = await modal.onWillDismiss();
      }
      else{
        this.router.navigate(['/otp']);
      }  


    }catch(e){
      console.log(e);
    }
  }
}
