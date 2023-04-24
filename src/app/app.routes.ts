import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'livros',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'livros',
    loadComponent: () => import('./livros/livros.page').then( m => m.LivrosPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.page').then( m => m.UsuariosPage)
  },
  {
    path: 'reservas',
    loadComponent: () => import('./reservas/reservas.page').then( m => m.ReservasPage)
  },
  {
    path: 'controleusuarios',
    loadComponent: () => import('./controleusuarios/controleusuarios.page').then( m => m.ControleusuariosPage)
  },
];
