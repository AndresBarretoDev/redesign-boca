import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateProblemsComponent } from './create-problems/create-problems.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { HistoricsComponent } from './historics/historics.component';
import { UsersComponent } from './users/users.component';
import { ZorroMModule } from '../zorro-m/zorro-m.module';
import { AppRoutingModule } from '../app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [WelcomeComponent,HomeComponent, LoginComponent, CreateProblemsComponent, ViewLogsComponent, HistoricsComponent, UsersComponent],
  imports: [
    CommonModule,
    ZorroMModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
