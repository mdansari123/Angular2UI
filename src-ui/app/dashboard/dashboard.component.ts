import { Component, OnInit } from '@angular/core';

import { Intent }        from '../intent';
import { IntentService } from '../intent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  intents: Intent[] = [];

  constructor(private intentService: IntentService) { }

  ngOnInit(): void {
    this.intentService.getIntents()
      .then(intents => this.intents = intents.slice(1, 5));
  }
}
