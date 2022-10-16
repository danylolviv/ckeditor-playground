import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqFuryComponent } from './marq-fury/marq-fury.component';
import {RouterModule} from "@angular/router";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { BuildDeuxComponent } from './build-deux/build-deux.component';



@NgModule({
  declarations: [
    MarqFuryComponent,
    BuildDeuxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: MarqFuryComponent,
        },
        {
          path: 'build2',
          component: BuildDeuxComponent,
        }
      ]
    ),
    CKEditorModule
  ]
})
export class SimpleModule { }
