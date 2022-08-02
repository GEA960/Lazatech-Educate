import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course1Page } from './course1.page';

const routes: Routes = [
  {
    path: '',
    component: Course1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course1PageRoutingModule {}
