import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LivroService } from 'src/services/livro.service';
import { ReservaService } from 'src/services/reserva.service';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-controledeusuarios',
  templateUrl: './controledeusuarios.page.html',
  styleUrls: ['./controledeusuarios.page.scss'],
})
export class ControledeusuariosPage implements OnInit {

  data!: any
selectedRow: any
modal!: HTMLIonModalElement
dataSource!: MatTableDataSource<any>

ngOnInit() {

  Swal.fire({
    title: "Carregando...",
    allowEscapeKey: false,
    allowOutsideClick: false,
    heightAuto: false,
    showConfirmButton: false,
    didOpen(popup){
      Swal.showLoading()
    }
  })

  this.usuarioService.getUsuarios().subscribe(res => {
    if (res != null){
      this.data = res.body
      this.dataSource = new MatTableDataSource(this.data)
      Swal.close()
    }
  })
}

displayedColumns = ['user_id', 'nome_user', 'serie', 'idade', 'status', 'debitos'];

  constructor(public usuarioService: UsuarioService, public livroService: LivroService, public reservaService: ReservaService, public navController: Router, public modalController: ModalController) { }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getIDclicked(row: any){
    this.selectedRow = row
    console.log(this.selectedRow)
    this.modal = await this.modalController.create({
      component: ModalUsuarioComponent,
      componentProps: {data: this.selectedRow},
      cssClass: 'modal-info-user'
    })
    await this.modal.present()
  }

}
