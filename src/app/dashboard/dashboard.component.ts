import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardInfoService } from './dashboard-info.service';

/**
* Dashboard component
*/
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [DashboardInfoService]
})
export class DashboardComponent implements OnInit {

  /**
  * List all source
  */
  public allSources = [];

  /**
  * Filtered sources
  */
  public sources = [];

  /**
  * Set to list categories
  */
  public categories:Set<string> = new Set();

  /**
  * Set to list languages
  */
  public languages:Set<string> = new Set();

  /**
  * Set to list countries
  */
  public countries:Set<string> = new Set();

  /*
  * Category filter
  */
  public categoryFilter = null;

  constructor(
    public service: DashboardInfoService
  ) { }

  /**
  * ngOnInit fetch all news sources
  */
  ngOnInit() {
    this.fetchNewSources();
  }

  /**
  * fetch all news sources
  */
  fetchNewSources(): void {

    const categories = [];
    this.service.getNewsSources()
      .subscribe(sources => {
        sources.forEach(source => {
          this.categories.add(source.category);
        });
        this.sources = this.allSources = sources;
      });
  }

  /**
  * Filter source by selected category
  */
  filterSources(): void {
    this.sources = this.allSources.filter(
      source => source.category == this.categoryFilter
    );
  }
}
