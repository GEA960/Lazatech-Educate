import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course1PageRoutingModule } from './course1-routing.module';

import { Course1Page } from './course1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course1PageRoutingModule
  ],
  declarations: [Course1Page]
})
export class Course1PageModule {}
