import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { IsLoggedInGuard } from './guard/is-logged-in.guard';

export const appRoutes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path: '',
  canActivate: [ IsLoggedInGuard ],
  component: DashboardComponent
},{
  path: 'articles/:sourceId/:sortBy',
  component: ArticlesComponent
}];
