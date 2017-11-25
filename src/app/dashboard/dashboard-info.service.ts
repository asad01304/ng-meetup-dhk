import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/**
* Dashboard info service
*/
@Injectable()
export class DashboardInfoService {

  /**
  * Constructor
  */
  constructor(
    private http: HttpClient
  ) { }

  /**
  * fetch news source, return Observable
  */
  getNewsSources(lang: string = 'en'): Observable<any>{
    return this.http
      .get(`${env.apiHost}/sources?language=en`)
      .map( res => res['sources'] );
  }
}
