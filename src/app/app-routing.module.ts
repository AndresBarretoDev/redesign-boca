import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProblemsComponent } from './pages/create-problems/create-problems.component';
import { HistoricsComponent } from './pages/historics/historics.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewLogsComponent } from './pages/view-logs/view-logs.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component:LoginComponent },
  { path: 'welcome',component:WelcomeComponent,
    children:[
      { path: 'home', component:HomeComponent },
      { path: 'users', component:UsersComponent },
      { path: 'problems', component:CreateProblemsComponent },
      { path: 'logs', component:ViewLogsComponent },
      { path: 'historics', component:HistoricsComponent },
    ]
  },
  {
    path:'**',
    redirectTo:'/login'
  },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
