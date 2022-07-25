import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lazatech-courses',
    loadChildren: () => import('./pages/lazatech-courses/lazatech-courses.module').then( m => m.LazatechCoursesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'enrolled-courses',
    loadChildren: () => import('./pages/enrolled-courses/enrolled-courses.module').then( m => m.EnrolledCoursesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-token-balance',
    loadChildren: () => import('./pages/my-token-balance/my-token-balance.module').then( m => m.MyTokenBalancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-payouts',
    loadChildren: () => import('./pages/my-payouts/my-payouts.module').then( m => m.MyPayoutsPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
