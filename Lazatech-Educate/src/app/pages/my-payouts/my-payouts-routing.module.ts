import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPayoutsPage } from './my-payouts.page';

const routes: Routes = [
  {
    path: '',
    component: MyPayoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPayoutsPageRoutingModule {}
