import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardInfoService } from './dashboard-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [DashboardInfoService]
})
export class DashboardComponent implements OnInit {

  public sources = [];
  public categories:Set<string> = new Set();
  public languages:Set<string> = new Set();
  public countries:Set<string> = new Set();

  constructor(
    public service: DashboardInfoService
  ) { }

  ngOnInit() {
    this.fetchNewSources();

  }

  fetchNewSources(): void {
    const
      categories = [],
      languages = [],
      countries = [];

    this.service.getNewsSources()
      .subscribe(sources => {
        this.sources = sources;

        sources.forEach(source => {
          this.countries.add(source.country);
          this.languages.add(source.language);
          this.categories.add(source.category);
        });

      });

  }
}
