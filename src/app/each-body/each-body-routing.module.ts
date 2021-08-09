import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EachBodyPage } from './each-body.page';

const routes: Routes = [
  {
    path: '',
    component: EachBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EachBodyPageRoutingModule {}
