import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPayoutsPageRoutingModule } from './my-payouts-routing.module';

import { MyPayoutsPage } from './my-payouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPayoutsPageRoutingModule
  ],
  declarations: [MyPayoutsPage]
})
export class MyPayoutsPageModule {}
