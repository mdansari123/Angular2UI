import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Intent }           from './intent';

@Injectable()
export class IntentSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Intent[]> {
    return this.http
               .get(`api/intentes/?name=${term}`)
               .map(response => response.json().data as Intent[]);
  }
}
