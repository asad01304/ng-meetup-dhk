import { TestBed, inject } from '@angular/core/testing';

import { ArticleInfoService } from './article-info.service';

describe('ArticleInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleInfoService]
    });
  });

  it('should be created', inject([ArticleInfoService], (service: ArticleInfoService) => {
    expect(service).toBeTruthy();
  }));
});
