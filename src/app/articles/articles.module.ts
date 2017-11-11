import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticleInfoService } from './article-info.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: ':sourceId/:sortBy',
  component: ArticlesComponent
}];

@NgModule({
  imports: [
    CommonModule,
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
