import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IonicModule, ModalController } from '@ionic/angular';
import { ReservaService } from 'src/services/reserva.service';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.scss'],
  standalone: true,
  providers: [UsuarioService, ReservaService],
  imports: [IonicModule, CommonModule, MatTableModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class ModalUsuarioComponent implements OnInit {

  @Input() data: any

  constructor(public modalController: ModalController, public usuarioService: UsuarioService, public reservaService: ReservaService) { }

  dataReservaUser!: any
  data2!: any
  displayedColumns = ['id_reserva', 'book_id', 'createdat', 'limitdate', 'status'];
  dataSource = this.dataReservaUser
  listaSerie = [
    {
      nome: '6 ano'
    },
    {
      nome: '7 ano'
    },
    {
      nome: '8 ano'
    },
    {
      nome: '9 ano'
    },
    {
      nome: '1 ano EM'
    },
    {
      nome: '2 ano EM'
    },
    {
      nome: '3 ano EM'
    },
  ]

  ngOnInit() {
    this.reservaService.reservasUsuario(this.data.user_id).subscribe(res => {
      console.log(res.body)
      this.dataReservaUser = res.body
      this.dataSource = new MatTableDataSource(this.dataReservaUser)
    })
    this.data2 = this.data
    console.log(this.data2)
  }

  goBack(){
    this.modalController.dismiss(null, 'cancel')
  }
  confirmarEdicao(){
    this.usuarioService.editarUsuario(this.data2).subscribe(res => {
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Usuário editado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.modalController.dismiss(null, 'cancel').then(() => {
          window.location.reload()
        })
        
      })
    })
  }

  trocaSerie(event: any){
this.data2.serie = event.target.value.nome
  }


}
