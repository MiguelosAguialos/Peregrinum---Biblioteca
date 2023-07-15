import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LivroService } from 'src/services/livro.service';
import {HttpClientModule} from '@angular/common/http';
import { UsuarioService } from 'src/services/usuario.service';
import { ReservaService } from 'src/services/reserva.service';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LivroService, UsuarioService, ReservaService, provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
