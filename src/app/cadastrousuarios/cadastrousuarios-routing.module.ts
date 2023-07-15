import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrousuariosPage } from './cadastrousuarios.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrousuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrousuariosPageRoutingModule {}
