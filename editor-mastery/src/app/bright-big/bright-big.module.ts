import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrightBigRoutingModule } from './bright-big-routing.module';
import { NewPageComponent } from './new-page/new-page.component';


@NgModule({
  declarations: [
    NewPageComponent
  ],
  imports: [
    CommonModule,
    BrightBigRoutingModule,
  ]
})
export class BrightBigModule { }
