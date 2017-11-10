import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { IsLoggedInGuard } from './guard/is-logged-in.guard';

export const appRoutes: Routes = [{
  path: '', redirectTo: '/dashboard', pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
},{
  path: 'dashboard',
  canActivate: [ IsLoggedInGuard ],
  component: DashboardComponent
},{
  path: 'articles/:sourceId/:sortBy',
  component: ArticlesComponent
}];
