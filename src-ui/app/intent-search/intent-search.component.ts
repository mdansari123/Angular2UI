import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { IntentSearchService } from '../intent-search.service';
import { Intent } from '../intent';

@Component({
  selector: 'app-intent-search',
  templateUrl: './intent-search.component.html',
  styleUrls: [ './intent-search.component.css' ],
  providers: [IntentSearchService]
})
export class IntentSearchComponent implements OnInit {
  intents: Observable<Intent[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private intentSearchService: IntentSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.intents = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.intentSearchService.search(term)
        // or the observable of empty intents if there was no search term
        : Observable.of<Intent[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Intent[]>([]);
      });
  }

  gotoDetail(intent: Intent): void {
    let link = ['/detail', intent.id];
    this.router.navigate(link);
  }
}
