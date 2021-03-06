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
import { ListProblemsComponent } from './list-problems/list-problems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WelcomeComponent,HomeComponent, LoginComponent, CreateProblemsComponent, ViewLogsComponent, HistoricsComponent, UsersComponent, ListProblemsComponent],
  imports: [
    CommonModule,
    ZorroMModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class PagesModule { }
