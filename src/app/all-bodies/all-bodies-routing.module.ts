import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBodiesPage } from './all-bodies.page';

const routes: Routes = [
  {
    path: '',
    component: AllBodiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBodiesPageRoutingModule {}
