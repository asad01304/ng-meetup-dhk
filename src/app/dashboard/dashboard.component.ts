import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardInfoService } from './dashboard-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [DashboardInfoService]
})
export class DashboardComponent implements OnInit {

  public allSources = [];
  public sources = [];

  public categories:Set<string> = new Set();
  public languages:Set<string> = new Set();
  public countries:Set<string> = new Set();

  public categoryFilter = null;

  constructor(
    public service: DashboardInfoService
  ) { }

  ngOnInit() {
    this.fetchNewSources();
  }

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

  filterSources(): void {
    this.sources = this.allSources.filter(
      source => source.category == this.categoryFilter
    );
  }
}
