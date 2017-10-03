import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Intent } from './intent';

@Injectable()
export class IntentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private intentesUrl = 'api/intentes';  // URL to web api

  constructor(private http: Http) { }

  getIntents(): Promise<Intent[]> {
    return this.http.get(this.intentesUrl)
               .toPromise()
               .then(response => response.json().data as Intent[])
               .catch(this.handleError);
  }


  getIntent(id: number): Promise<Intent> {
    const url = `${this.intentesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Intent)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.intentesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Intent> {
    return this.http
      .post(this.intentesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Intent)
      .catch(this.handleError);
  }

  update(intent: Intent): Promise<Intent> {
    const url = `${this.intentesUrl}/${intent.id}`;
    return this.http
      .put(url, JSON.stringify(intent), {headers: this.headers})
      .toPromise()
      .then(() => intent)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

