import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetotpPage } from './getotp.page';

const routes: Routes = [
  {
    path: '',
    component: GetotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetotpPageRoutingModule {}
