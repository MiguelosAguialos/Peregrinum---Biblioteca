import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule]
})
export class ReservasPage implements OnInit {

  reservasForm!: FormGroup

  alunos = [
    {
      id: 1,
      nome: "Miguel Aguiar Fernandes",
      serie: "3 ano ensino medio",
      email: "aguiarmiguel65@gmail.com",
      telefone: "11994278242"
    },
    {
      id: 2,
      nome: "Vitória Santos",
      serie: "3 ano ensino medio",
      email: "aguiarmiguel65@gmail.com",
      telefone: "11994278242"
    },
    {
      id: 3,
      nome: "Maria Fernanda",
      serie: "3 ano ensino medio",
      email: "aguiarmiguel65@gmail.com",
      telefone: "11994278242"
    }
  ]

  livros = [
    {
      id: 1,
      nome: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      tema: "Fantasia"
  },
  {
    id: 2,
    nome: "1984",
    autor: "George Orwell",
    tema: "Distopia"
},
{
  id: 3,
  nome: "A Arte da Guerra",
  autor: "Sun Tzu",
  tema: "Estratégia"
},
{
  id: 4,
  nome: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  tema: "Infantil"
},
{
  id: 5,
  nome: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  tema: "Realismo Mágico"
}
  ]

  reserva = {
    currentAluno: null,
    currentLivro: null
  }

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reservasForm = this.formBuilder.group({
      aluno: [null, Validators.compose([Validators.required])],
      livro: [null, Validators.compose([Validators.required])],
    })
    
  }

  cadastrarReserva(){
    console.log(this.reserva.currentAluno)
    console.log(this.reserva.currentLivro)
  }

  selecionarAluno(ev: any){
this.reserva.currentAluno = ev.target.value
  }
  selecionarLivro(ev: any){
this.reserva.currentLivro = ev.target.value
  }

}
