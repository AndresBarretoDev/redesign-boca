import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ZorroMModule } from '../zorro-m/zorro-m.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    ZorroMModule,
    AppRoutingModule
  ],
  exports:[NavigationComponent]
})
export class ComponentsModule { }
