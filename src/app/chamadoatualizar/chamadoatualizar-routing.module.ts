import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamadoatualizarPage } from './chamadoatualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ChamadoatualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamadoatualizarPageRoutingModule {}
