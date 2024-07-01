import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ModalOptions } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { ApiserviceService } from '../services/apiservice.service';
import { BooknowPage } from '../booknow/booknow.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  getalldata : any;
  searchText: any;
  constructor(private route: Router,public fb : FormBuilder, private modalctrl: ModalController, private auth : AuthService, private api: ApiserviceService) {}

  ngOnInit() {

    this.getturfname();
  }

  getturfname(){

      this.api.get('/RegisterAdminApi/Turfnames').subscribe((res:any)=>{

        this.getalldata = res.Data;

        // console.log(this.getalldata);
      })
      
  }

  async book(id:any){
    // alert(id);
    this.route.navigate(['/booknow'], { queryParams: { id: id } });
    const options: ModalOptions = {
      component: BooknowPage,
     
      // swipeToClose: true
    };

    const modal = await this.modalctrl.create(options);
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}
