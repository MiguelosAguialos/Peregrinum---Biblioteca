import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsuarioService } from 'src/services/usuario.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { ModalLivroComponent } from '../modal-livro/modal-livro.component';
import Swal from 'sweetalert2';
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-controlelivros',
  templateUrl: './controlelivros.page.html',
  styleUrls: ['./controlelivros.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MatFormFieldModule, MatTableModule, MatInputModule, ReactiveFormsModule, ScrollingModule]
})
export class ControlelivrosPage implements OnInit {

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

  this.usuarioService.getLivros().subscribe(res => {
    if (res != null){
      this.data = res.body
      this.dataSource = new MatTableDataSource(this.data)
      Swal.close()
    }
  })
}

displayedColumns = ['book_id', 'nome_livro', 'author', 'assunto', 'status'];





  constructor(public usuarioService: UsuarioService, public modalController: ModalController) { }

  async getIDclicked(row: any){
    this.selectedRow = row
    console.log(this.selectedRow)
    this.modal = await this.modalController.create({
      component: ModalLivroComponent,
      componentProps: {data: this.selectedRow},
      cssClass: 'modal-info-user'
    })
    await this.modal.present()
  }

}
