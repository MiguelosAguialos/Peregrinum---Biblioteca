import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LivrosPage implements OnInit {

  livrosForm!: FormGroup

  livros = {
    nome_livro: '',
    author: '',
    assunto: ''
  }

  constructor(public formBuilder: FormBuilder, public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.livrosForm = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.minLength(3), Validators.required])],
      autor: [null, Validators.compose([Validators.minLength(3), Validators.required])],
      tema: [null, Validators.compose([Validators.minLength(3), Validators.required])],
    })
  }

  cadastrarLivro(){
    this.usuarioService.cadastrarLivro(this.livros).subscribe(res => {
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Livro cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.livros.assunto = ''
      this.livros.author = ''
      this.livros.nome_livro = ''
    })
  }
}
