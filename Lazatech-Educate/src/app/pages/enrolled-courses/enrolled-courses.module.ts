import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrolledCoursesPageRoutingModule } from './enrolled-courses-routing.module';

import { EnrolledCoursesPage } from './enrolled-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrolledCoursesPageRoutingModule
  ],
  declarations: [EnrolledCoursesPage]
})
export class EnrolledCoursesPageModule {}
