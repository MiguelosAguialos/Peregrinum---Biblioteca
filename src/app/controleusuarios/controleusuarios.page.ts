import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { ModalUserComponent } from '../modal-user/modal-user.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-controleusuarios',
  templateUrl: './controleusuarios.page.html',
  styleUrls: ['./controleusuarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MatFormFieldModule, MatTableModule, MatInputModule, ReactiveFormsModule]
})
export class ControleusuariosPage implements OnInit {

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





  constructor(public usuarioService: UsuarioService, public navController: Router, public modalController: ModalController) { }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getIDclicked(row: any){
    this.selectedRow = row
    console.log(this.selectedRow)
    this.modal = await this.modalController.create({
      component: ModalUserComponent,
      componentProps: {data: this.selectedRow},
      cssClass: 'modal-info-user'
    })
    await this.modal.present()
  }

}
