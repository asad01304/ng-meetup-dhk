import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';

export const appRoutes: Routes = [{
  path: '', redirectTo: '/dashboard', pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardComponent
},{
  path: 'articles/:sourceId/:sortBy',
  component: ArticlesComponent
}];
