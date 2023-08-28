import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaibamaisPage } from './saibamais.page';

const routes: Routes = [
  {
    path: '',
    component: SaibamaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaibamaisPageRoutingModule {}
