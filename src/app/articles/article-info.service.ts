import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/**
* Atricle info service
*/
@Injectable()
export class ArticleInfoService {

  /**
  * Constructor
  */
  constructor(
    private http: HttpClient
  ) { }

  /**
  * Fetch latest articles
  */
  public getLatestArticles(sourceId:string, sortBy:string): Observable<any>{
    const url = `${env.apiHost}/articles?source=${sourceId}&sortBy=${sortBy}&apiKey=${env.apiKey}`;
    return this.http.get(url).map(res => res['articles']);
  }

}
