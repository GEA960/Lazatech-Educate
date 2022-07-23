import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrolledCoursesPage } from './enrolled-courses.page';

const routes: Routes = [
  {
    path: '',
    component: EnrolledCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrolledCoursesPageRoutingModule {}
