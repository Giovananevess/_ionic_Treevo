import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamadoatualizarPageRoutingModule } from './chamadoatualizar-routing.module';

import { ChamadoatualizarPage } from './chamadoatualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamadoatualizarPageRoutingModule
  ],
  declarations: [ChamadoatualizarPage]
})
export class ChamadoatualizarPageModule {}
