import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTokenBalancePage } from './my-token-balance.page';

const routes: Routes = [
  {
    path: '',
    component: MyTokenBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTokenBalancePageRoutingModule {}
