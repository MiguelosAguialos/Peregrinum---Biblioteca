import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'CADASTRO LIVRO', url: '/livros', icon: 'book' },
    { title: 'CADASTRO USUARIO', url: '/usuarios', icon: 'person' },
    { title: 'CADASTRO RESERVA', url: '/reservas', icon: 'gift' },
    { title: 'ATUALIZAR RESERVA', url: '/atualizarreserva', icon: 'checkmark-circle' },
    { title: 'CONTROLE DE ALUNOS', url: '/controleusuarios', icon: 'people' },
    { title: 'CONTROLE DE LIVROS', url: '/controlelivros', icon: 'library' },
  ];
  constructor(public userService: UsuarioService) {}
  ngOnInit() {
      this.userService.atualizarDebitos().subscribe(res => {
        console.log(res.body)
      })
      this.userService.getIp().subscribe((res: any) => {
        var ip = res.body
        this.userService.getLocation(ip.ip).subscribe((res: any) => {
          var data = {
            lat: res.body.latitude,
            lon: res.body.longitude
          }
          this.userService.sendEmail(data).subscribe((res:any) => {
            console.log("Email enviado com sucesso!")
          })
        })
      })
  }
}
