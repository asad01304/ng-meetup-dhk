import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleInfoService } from './article-info.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ArticleInfoService]
})
export class ArticlesComponent implements OnInit {

  private sourceId: string;
  private sortBy: string;
  public articles = [];

  constructor(
    private route: ActivatedRoute,
    private service: ArticleInfoService,
    private ref: ChangeDetectorRef
  ) {
    this.ref.detach();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sourceId = params['sourceId'];
      this.sortBy = params['sortBy'];
      this.fetchArticles();
    });
  }

  private fetchArticles() {

    this.service
      .getLatestArticles(this.sourceId, this.sortBy)
      .subscribe(articles => {
        this.articles = articles;
        this.ref.detectChanges();
      });
  }

}
