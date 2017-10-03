import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { IntentsComponent }      from './intents/intents.component';
import { IntentDetailComponent }  from './intent-detail/intent-detail.component';
import { IntentService }          from './intent.service';
import { IntentSearchComponent }  from './intent-search/intent-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    IntentDetailComponent,
    IntentsComponent,
    IntentSearchComponent
  ],
  providers: [ IntentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
