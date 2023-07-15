import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { IonicModule, ModalController } from '@ionic/angular';
import { ReservaService } from 'src/services/reserva.service';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-reserva',
  templateUrl: './modal-reserva.component.html',
  styleUrls: ['./modal-reserva.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MatTableModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers: [UsuarioService, ReservaService]
})
export class ModalReservaComponent  implements OnInit {
  @Input() data: any

  dataReserva!: any

  constructor(public modalController: ModalController, public reservaService: ReservaService) { }
  ngOnInit() {
    this.reservaService.reservasAtivasUsuarios(this.data.user_id).subscribe(res => {
      this.dataReserva = res.body
      console.log(this.dataReserva)
    })
  }
  confirmarAtualizacao(){
    console.log(this.dataReserva.id_reserva)
    this.reservaService.concluirReserva(this.dataReserva.id_reserva).subscribe(res => {
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Reserva concluída com sucesso!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.modalController.dismiss(null, 'cancel').then(() => {
          window.location.reload()
        })
        
      })
    })
    
  }
  goBack(){
    this.modalController.dismiss(null, 'cancel')
  }

}
