import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroreservasPage } from './cadastroreservas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroreservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroreservasPageRoutingModule {}
