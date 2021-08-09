import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EachBodyPageRoutingModule } from './each-body-routing.module';

import { EachBodyPage } from './each-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EachBodyPageRoutingModule
  ],
  declarations: [EachBodyPage]
})
export class EachBodyPageModule {}
