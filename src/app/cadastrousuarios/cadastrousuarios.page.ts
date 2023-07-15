import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrousuarios',
  templateUrl: './cadastrousuarios.page.html',
  styleUrls: ['./cadastrousuarios.page.scss'],
})
export class CadastrousuariosPage implements OnInit {

  usuariosForm!: FormGroup

  usuarios = {
    nome_user: null,
    idade: null,
    serie: null
  }

  series = [
    {nome: '6 ano fundamental'},
    {nome: '7 ano fundamental'},
    {nome: '8 ano fundamental'},
    {nome: '9 ano fundamental'},
    {nome: '1 ano EM'},
    {nome: '2 ano EM'},
    {nome: '3 ano EM'},
  ]

  constructor(public formBuilder: FormBuilder, public userService: UsuarioService) { }

  ngOnInit() {
    this.usuariosForm = this.formBuilder.group({
      nome_user: [null, Validators.compose([Validators.minLength(3), Validators.required])],
      idade: [null, Validators.compose([Validators.minLength(3), Validators.required])],
      serie: [null, Validators.compose([Validators.required])]
    })
  }

  cadastrarUsuario(){
    if(this.usuarios.nome_user == null || this.usuarios.nome_user == "" || this.usuarios.idade == null || this.usuarios.idade == "" || this.usuarios.serie == null || this.usuarios.serie == ""){
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'error',
        title: 'Os campos devem ser preenchidos!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
    this.userService.cadastrarAluno(this.usuarios).subscribe(res => {
      Swal.fire({
        position: 'center',
        heightAuto: false,
        icon: 'success',
        title: 'Aluno cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.usuarios.nome_user = null
      this.usuarios.idade = null
      this.usuarios.serie = null
    })
  }
  }

  selecionarSerie(ev: any){
    this.usuarios.serie = ev.target.value.nome
    console.log(this.usuarios.serie)
  }

}
