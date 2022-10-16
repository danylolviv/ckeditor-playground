import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyComponentComponent} from "./my-component/my-component.component";

const routes: Routes = [
  {
    path: 'sheesh',
    loadChildren: () => import('./simple/simple.module').then(m => m.SimpleModule),
  },
  {
    path: '',
    component: MyComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
