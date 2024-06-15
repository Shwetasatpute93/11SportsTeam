import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetotpPageRoutingModule } from './getotp-routing.module';

import { GetotpPage } from './getotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetotpPageRoutingModule
  ],
  declarations: [GetotpPage]
})
export class GetotpPageModule {}
