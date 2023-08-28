import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaibamaisPageRoutingModule } from './saibamais-routing.module';

import { SaibamaisPage } from './saibamais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaibamaisPageRoutingModule
  ],
  declarations: [SaibamaisPage]
})
export class SaibamaisPageModule {}
