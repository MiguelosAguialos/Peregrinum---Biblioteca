import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from 'src/services/usuario.service';
import { provideAnimations } from '@angular/platform-browser/animations'; 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule, HttpClientModule],
  providers: [UsuarioService, provideAnimations()]
})
export class AppComponent {
  public appPages = [
    { title: 'LIVROS', url: '/livros', icon: 'mail' },
    { title: 'USUARIOS', url: '/usuarios', icon: 'paper-plane' },
    { title: 'RESERVAS', url: '/reservas', icon: 'heart' },
    { title: 'CONTROLE DE ALUNOS', url: '/controleusuarios', icon: 'heart' },
  ];
  constructor() {}
}
