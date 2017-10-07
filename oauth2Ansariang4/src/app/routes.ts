import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddclientComponent} from './addclient/addclient.component';
import {BookComponent} from './book/book.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {PromptsComponent} from './prompts/prompts.component';
import {AuthManager} from './authmanager';
 


export const appRoutes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'login', component:LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'addclient', component:AddclientComponent},
    {path: 'books', component:BookComponent},
    {path: 'workspace', component:WorkspaceComponent},
    {path: 'prompts', component:PromptsComponent},
    
]

export const AppRouter = RouterModule.forRoot(appRoutes);