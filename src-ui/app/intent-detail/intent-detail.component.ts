import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Intent }        from '../intent';
import { IntentService } from '../intent.service';

@Component({
  selector: 'app-intent-detail',
  templateUrl: './intent-detail.component.html',
  styleUrls: [ './intent-detail.component.css' ]
})
export class IntentDetailComponent implements OnInit {
  intent: Intent;

  constructor(
    private intentService: IntentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.intentService.getIntent(+params.get('id')))
      .subscribe(intent => this.intent = intent);
  }

  save(): void {
    this.intentService.update(this.intent)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
