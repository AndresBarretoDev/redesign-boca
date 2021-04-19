import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from './../icons-provider.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    IconsProviderModule,
    NzInputModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzUploadModule,
    NzFormModule
  ],
  exports:[
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    IconsProviderModule,
    NzInputModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzUploadModule,
    NzFormModule
  ]
})
export class ZorroMModule { }
