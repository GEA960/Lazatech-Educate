import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LazatechCoursesPageRoutingModule } from './lazatech-courses-routing.module';

import { LazatechCoursesPage } from './lazatech-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LazatechCoursesPageRoutingModule
  ],
  declarations: [LazatechCoursesPage]
})
export class LazatechCoursesPageModule {}
