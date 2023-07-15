import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'CADASTRO LIVRO', url: '/cadastrolivros', icon: 'book' },
    { title: 'CADASTRO USUARIO', url: '/cadastrousuarios', icon: 'person' },
    { title: 'CADASTRO RESERVA', url: '/cadastroreservas', icon: 'gift' },
    { title: 'ATUALIZAR RESERVA', url: '/atualizarreserva', icon: 'checkmark-circle' },
    { title: 'CONTROLE DE ALUNOS', url: '/controledeusuarios', icon: 'people' },
    { title: 'CONTROLE DE LIVROS', url: '/home', icon: 'library' },
  ];
  constructor() {}
}
