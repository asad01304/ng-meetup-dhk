import { NgModule, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticleInfoService } from './article-info.service';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: ':sourceId/:sortBy',
  component: ArticlesComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticlesComponent,
  ],
  providers:[
    ArticleInfoService
  ]
})
export class ArticlesModule { }
