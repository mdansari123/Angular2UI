import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Intent }                from '../intent';
import { IntentService }         from '../intent.service';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: [ './intents.component.css' ]
})
export class IntentsComponent implements OnInit {
  intents: Intent[];
  selectedIntent: Intent;

  constructor(
    private intentService: IntentService,
    private router: Router) { }

  getIntents(): void {
    this.intentService
        .getIntents()
        .then(intents => this.intents = intents);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.intentService.create(name)
      .then(intent => {
        this.intents.push(intent);
        this.selectedIntent = null;
      });
  }

  delete(intent: Intent): void {
    this.intentService
        .delete(intent.id)
        .then(() => {
          this.intents = this.intents.filter(h => h !== intent);
          if (this.selectedIntent === intent) { this.selectedIntent = null; }
        });
  }

  ngOnInit(): void {
    this.getIntents();
  }

  onSelect(intent: Intent): void {
    this.selectedIntent = intent;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedIntent.id]);
  }
}
