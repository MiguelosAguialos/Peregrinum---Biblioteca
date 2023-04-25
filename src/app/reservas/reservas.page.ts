import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule]
})
export class ReservasPage implements OnInit {

  reservasForm!: FormGroup

  alunos!: any

  livros!: any

  reserva = {
    user_id: null,
    book_id: null
  }

  constructor(public formBuilder: FormBuilder, public userService: UsuarioService) { }

  ngOnInit() {
    this.reservasForm = this.formBuilder.group({
      aluno: [null, Validators.compose([Validators.required])],
      livro: [null, Validators.compose([Validators.required])],
    })
    this.userService.getUsuariosDisponiveis().subscribe(res => {
      this.alunos = res.body
    })
    this.userService.getLivrosDisponiveis().subscribe(res => {
      this.livros = res.body
    })
    
    
  }

  cadastrarReserva(){
    if(this.reserva.book_id == null || this.reserva.user_id == null){
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'error',
        title: 'Os campos devem ser selecionados!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
    this.userService.cadastrarReserva(this.reserva).subscribe(res => {
      this.reserva.book_id = null
      this.reserva.user_id = null
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Reserva registrada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.reload()
      })
      
    })
  }
  }

  selecionarAluno(ev: any){
this.reserva.user_id = ev.target.value
  }
  selecionarLivro(ev: any){
this.reserva.book_id = ev.target.value
  }

}
