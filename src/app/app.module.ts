import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { ZorroMModule } from './zorro-m/zorro-m.module';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PagesModule,
    ZorroMModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
