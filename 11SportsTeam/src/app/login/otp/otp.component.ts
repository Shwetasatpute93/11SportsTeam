import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent  implements OnInit {

  public otp: string | undefined;
  config = {
    length : 6,
    allowNumbersOnly: true,
    inputClass : 'otp-input-style'
  }
  constructor() { }

  ngOnInit() {}

  onOtpChange(event:any){
    this.otp = event;
    console.log(this.otp);
  }

  resend(){

  }

  verifyotp(){

  }
}
