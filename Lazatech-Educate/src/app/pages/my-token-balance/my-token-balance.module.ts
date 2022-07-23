import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTokenBalancePageRoutingModule } from './my-token-balance-routing.module';

import { MyTokenBalancePage } from './my-token-balance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTokenBalancePageRoutingModule
  ],
  declarations: [MyTokenBalancePage]
})
export class MyTokenBalancePageModule {}
