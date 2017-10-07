import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AppRouter} from './routes'
import {AuthService} from './auth.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddclientComponent } from './addclient/addclient.component';
import { BookComponent } from './book/book.component';
import { WorkspaceComponent } from './workspace/workspace.component';  
import { PromptsComponent } from './prompts/prompts.component';    

@NgModule({
    declarations: [AppComponent, DashboardComponent, LoginComponent,AddclientComponent, BookComponent, WorkspaceComponent,PromptsComponent],
    imports: [BrowserModule, HttpModule, RouterModule, FormsModule, AppRouter,ReactiveFormsModule,BrowserAnimationsModule],
    providers:[AuthService],
    bootstrap: [AppComponent],
    
})

export class AppModule { }
