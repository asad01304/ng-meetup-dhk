import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardInfoService {

  constructor(
    private http: HttpClient
  ) { }

  getNewsSources(lang: string = 'en'): Observable<any>{
    return this.http
      .get(`${env.apiHost}/sources?language=en`)
      .map( res => res['sources'] );
  }
}
