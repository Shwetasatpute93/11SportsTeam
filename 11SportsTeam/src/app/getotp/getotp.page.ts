import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getotp',
  templateUrl: './getotp.page.html',
  styleUrls: ['./getotp.page.scss'],
})
export class GetotpPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  verifyOtp(){
    this.route.navigate(['/dashboard'])
  }

}
