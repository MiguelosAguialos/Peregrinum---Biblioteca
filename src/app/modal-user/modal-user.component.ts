import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IonicModule, ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss'],
  standalone: true,
  providers: [UsuarioService],
  imports: [IonicModule, CommonModule, FormsModule, MatTableModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class ModalUserComponent  implements OnInit {
  @Input() data: any

  constructor(public modalController: ModalController, public usuarioService: UsuarioService) { }

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
    this.usuarioService.reservasUsuario(this.data.user_id).subscribe(res => {
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
      console.log(res)
    })
    this.modalController.dismiss(null, 'cancel')
    window.location.reload()
    
  }
  trocaSerie(event: any){
this.data2.serie = event.target.value.nome
  }

}
