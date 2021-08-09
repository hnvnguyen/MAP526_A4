import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllBodiesPageRoutingModule } from './all-bodies-routing.module';

import { AllBodiesPage } from './all-bodies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllBodiesPageRoutingModule
  ],
  declarations: [AllBodiesPage]
})
export class AllBodiesPageModule {}
