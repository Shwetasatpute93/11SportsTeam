import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {

  public turfForm!: FormGroup;
  details: any;
  address:any;
  rate = 800;
  amount = 200;
  total : any;

  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };


 
  constructor(private route: ActivatedRoute, private router: Router,public fb : FormBuilder, private modalctrl: ModalController,
     private auth : AuthService, private api: ApiserviceService) {


     }

  ngOnInit() {
    
    this.total = this.rate + this.amount;
    console.log(this.total);
    
    this.turfForm = this.fb.group({
      regid : ['', Validators.required],
      firstname: ['', Validators.required],
      mobileno: ['', Validators.required],
      timeslots: ['', Validators.required],
      rate: [this.total, Validators.required]
    
    });
    
    this.getDetails();
    
    
  }

  
  getDetails(){

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      console.log('ID:', id);
      
        this.api.post('/RegisterAdminApi/getTurfDetails', {id:id}).subscribe((res:any) => {

          this.details = res.Data;
          console.log(this.details)
          this.address = this.details[0].address+ " " + this.details[0].area + " " +this.details[0].city + " " + this.details[0].pincode;
         
        })
    });
    
  }

  Savedetails(){


      
  }

}
