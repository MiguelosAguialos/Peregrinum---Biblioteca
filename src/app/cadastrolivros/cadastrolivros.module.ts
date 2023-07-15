import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrolivrosPageRoutingModule } from './cadastrolivros-routing.module';

import { CadastrolivrosPage } from './cadastrolivros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrolivrosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastrolivrosPage]
})
export class CadastrolivrosPageModule {}
