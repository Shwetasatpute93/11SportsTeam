import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  mobileNumber !: string;

  constructor(private route: Router, private navCtrl: NavController) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigateToOtpPage() {
    // if (form.valid) {
    //   // Here you would typically send the mobile number to your backend service to get the OTP
    //   console.log('Mobile Number:', this.mobileNumber);
    //   // Navigate to the OTP entry page
    //   this.navCtrl.navigateForward('enterotp', {
    //     queryParams: { mobileNumber: this.mobileNumber }
    //   });
    // }
    // this.route.navigate(['/enterotp'])
    
      this.route.navigate(['/getotp'], {
        queryParams: { mobileNumber: this.mobileNumber }
       
      });
     
   
  }

}
