import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'lazatech-courses',
        loadChildren: () => import('../lazatech-courses/lazatech-courses.module').then( m => m.LazatechCoursesPageModule)
      },
      {
        path: 'enrolled-courses',
        loadChildren: () => import('../enrolled-courses/enrolled-courses.module').then( m => m.EnrolledCoursesPageModule)
      },
      {
        path: 'my-token-balance',
        loadChildren: () => import('../my-token-balance/my-token-balance.module').then( m => m.MyTokenBalancePageModule)
      },
      {
        path: 'my-payouts',
        loadChildren: () => import('../my-payouts/my-payouts.module').then( m => m.MyPayoutsPageModule)
      },
      {
        path: '',
        redirectTo: 'nav/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'nav/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule {}
