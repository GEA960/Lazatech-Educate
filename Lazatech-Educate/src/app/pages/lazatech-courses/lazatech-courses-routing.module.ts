import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazatechCoursesPage } from './lazatech-courses.page';

const routes: Routes = [
  {
    path: '',
    component: LazatechCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazatechCoursesPageRoutingModule {}
