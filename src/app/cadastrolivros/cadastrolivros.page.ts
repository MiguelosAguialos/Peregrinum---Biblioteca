import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from 'src/services/livro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrolivros',
  templateUrl: './cadastrolivros.page.html',
  styleUrls: ['./cadastrolivros.page.scss'],
})
export class CadastrolivrosPage implements OnInit {
  livrosForm!: FormGroup

  livros = {
    nome_livro: null,
    author: null,
    assunto: null
  }

  constructor(public formBuilder: FormBuilder, public usuarioService: LivroService) { }

  ngOnInit() {
    this.livrosForm = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.minLength(3), Validators.required])],
      autor: [null, Validators.compose([Validators.minLength(3), Validators.required])],
      tema: [null, Validators.compose([Validators.minLength(3), Validators.required])],
    })
  }

  cadastrarLivro(){
    if(this.livros.nome_livro == null || this.livros.nome_livro == "" || this.livros.author == null || this.livros.author == "" || this.livros.assunto == null || this.livros.assunto == ""){
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'error',
        title: 'Os campos devem ser preenchidos!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
    this.usuarioService.cadastrarLivro(this.livros).subscribe(res => {
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Livro cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.livros.assunto = null
      this.livros.author = null
      this.livros.nome_livro = null
    })
  }
  }
}
