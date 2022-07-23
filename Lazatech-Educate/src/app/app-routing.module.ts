import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./pages/sidenav/sidenav.module').then( m => m.SidenavPageModule)
  },
  {
    path: 'lazatech-courses',
    loadChildren: () => import('./pages/lazatech-courses/lazatech-courses.module').then( m => m.LazatechCoursesPageModule)
  },
  {
    path: 'enrolled-courses',
    loadChildren: () => import('./pages/enrolled-courses/enrolled-courses.module').then( m => m.EnrolledCoursesPageModule)
  },
  {
    path: 'my-token-balance',
    loadChildren: () => import('./pages/my-token-balance/my-token-balance.module').then( m => m.MyTokenBalancePageModule)
  },
  {
    path: 'my-payouts',
    loadChildren: () => import('./pages/my-payouts/my-payouts.module').then( m => m.MyPayoutsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
