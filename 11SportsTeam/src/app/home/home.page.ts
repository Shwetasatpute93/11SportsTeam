import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat : any;
  lng : any;
  constructor(
    private geo : Geolocation, private route:Router
  ) {}

  WhereIam(){

    this.geo.getCurrentPosition(
     { timeout: 10000,
      enableHighAccuracy: true}
    ).then((res) => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      this.route.navigate(['/login']);
      // this.route.navigateByUrl('login');
    }).catch((e)=>{
      console.log(e);
    });
  }

}
