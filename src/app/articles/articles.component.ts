import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleInfoService } from './article-info.service';

/**
* Atricle details component
*/
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ArticleInfoService]
})
export class ArticlesComponent implements OnInit {

  /**
  * Source id param
  */
  private sourceId: string;

  /**
  * Sort by params
  */
  private sortBy: string;

  /**
  * List of articles
  */
  public articles = [];

  /**
  * Constructor
  *
  */
  constructor(
    private route: ActivatedRoute,
    private service: ArticleInfoService    
  ) { }


  /**
  * OnInit - set params from url
  * fetch articles by sourceId
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sourceId = params['sourceId'];
      this.sortBy = params['sortBy'];
      this.fetchArticles();
    });
  }

  /**
  * Fetch articles by sourceId
  */
  private fetchArticles() {
    this.service
      .getLatestArticles(this.sourceId, this.sortBy)
      .subscribe(articles => {
        this.articles = articles;
      });
  }

}
