import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControledeusuariosPage } from './controledeusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ControledeusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControledeusuariosPageRoutingModule {}
