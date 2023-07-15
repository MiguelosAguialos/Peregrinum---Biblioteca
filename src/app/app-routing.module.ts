import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cadastrolivros',
    pathMatch: 'full'
  },
  {
    path: 'cadastrousuarios',
    loadChildren: () => import('./cadastrousuarios/cadastrousuarios.module').then( m => m.CadastrousuariosPageModule)
  },
  {
    path: 'cadastrolivros',
    loadChildren: () => import('./cadastrolivros/cadastrolivros.module').then( m => m.CadastrolivrosPageModule)
  },
  {
    path: 'cadastroreservas',
    loadChildren: () => import('./cadastroreservas/cadastroreservas.module').then( m => m.CadastroreservasPageModule)
  },
  {
    path: 'controledeusuarios',
    loadChildren: () => import('./controledeusuarios/controledeusuarios.module').then( m => m.ControledeusuariosPageModule)
  },
  {
    path: 'atualizarreserva',
    loadChildren: () => import('./atualizarreserva/atualizarreserva.module').then( m => m.AtualizarreservaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
