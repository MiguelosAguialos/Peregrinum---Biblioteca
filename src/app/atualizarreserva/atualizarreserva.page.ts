import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReservaService } from 'src/services/reserva.service';
import { UsuarioService } from 'src/services/usuario.service';
import { ModalReservaComponent } from '../modal-reserva/modal-reserva.component';

@Component({
  selector: 'app-atualizarreserva',
  templateUrl: './atualizarreserva.page.html',
  styleUrls: ['./atualizarreserva.page.scss'],
})
export class AtualizarreservaPage implements OnInit {

  
  modal!: HTMLIonModalElement
  usuarios!: any
  constructor(public userService: UsuarioService, public modalController: ModalController, reservaService: ReservaService) { }

  ngOnInit() {
    this.userService.getUsuariosIndisponiveis().subscribe(res => {
      this.usuarios = res.body
      console.log(this.usuarios)
    })
  }
   async atualizarReservaNome(ev: any){
    console.log(ev.target.value)
    if(ev.target.value != undefined){
    this.modal = await this.modalController.create({
      component: ModalReservaComponent,
      componentProps: {data: ev.target.value},
      cssClass: 'modal-info-user'
    })
    await this.modal.present()
  }
  }

}
