import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgControl} from '@angular/forms';
import {AppRouter} from './routes'
import {AuthService} from './auth.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddclientComponent } from './addclient/addclient.component';
import { BookComponent } from './book/book.component';
import { WorkspaceComponent } from './workspace/workspace.component';  
import { PromptsComponent } from './prompts/prompts.component';
import { TagInputComponent } from './entitysynonym/entitysynonym.component'; 
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { TagInputItemComponent } from './tag-input-item/tag-input-item.component';
import { TagInputAutocompleteComponent } from './tag-input-autocomplete/tag-input-autocomplete.component';
//import { TagInputItemComponent } from './components/tag-input-item/tag-input-item.component';   
//import { TagInputItemComponent } from './entitysynonym/tag-input-item.component';
@NgModule({
    declarations: [AppComponent, DashboardComponent, LoginComponent,AddclientComponent, BookComponent, WorkspaceComponent,PromptsComponent, TagInputComponent, TagInputItemComponent, TagInputAutocompleteComponent],
    imports: [BrowserModule, HttpModule, RouterModule, FormsModule, AppRouter,ReactiveFormsModule,BrowserAnimationsModule],
    providers:[AuthService],
    exports: [
        TagInputComponent
      ],
    bootstrap: [AppComponent],
    
})

export class AppModule { }
