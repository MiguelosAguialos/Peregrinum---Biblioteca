import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrolivrosPage } from './cadastrolivros.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrolivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrolivrosPageRoutingModule {}
