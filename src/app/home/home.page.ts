import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ModalController } from '@ionic/angular';
import { LivroService } from 'src/services/livro.service';
import Swal from 'sweetalert2';
import { ModalLivroComponent } from '../modal-livro/modal-livro.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

  this.livroService.getLivros().subscribe(res => {
    if (res != null){
      const data: any = res.body
      this.dataSource = new MatTableDataSource(data)
      Swal.close()
    }
  })
}

displayedColumns: string[] = ['book_id', 'nome_livro', 'author', 'assunto', 'status'];


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


  constructor(public livroService: LivroService, public modalController: ModalController) { }

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
