import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { IonicModule, ModalController } from '@ionic/angular';
import { LivroService } from 'src/services/livro.service';
import { ReservaService } from 'src/services/reserva.service';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-livro',
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.scss'],
  standalone: true,
  providers: [LivroService, ReservaService],
  imports: [IonicModule, CommonModule, FormsModule, MatTableModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class ModalLivroComponent  implements OnInit {
  @Input() data: any

  constructor(public modalController: ModalController, public livroService: LivroService) { }
  
  data2!: any
  

  ngOnInit() {
    this.data2 = this.data
  }

  goBack(){
    this.modalController.dismiss(null, 'cancel')
  }
  confirmarEdicao(){
    this.livroService.editarLivro(this.data2).subscribe(res => {
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Livro editado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.modalController.dismiss(null, 'cancel').then(() => {
          window.location.reload()
        })
        
      })
    })
  }
}
