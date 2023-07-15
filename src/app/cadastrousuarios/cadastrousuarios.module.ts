import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrousuariosPageRoutingModule } from './cadastrousuarios-routing.module';

import { CadastrousuariosPage } from './cadastrousuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrousuariosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastrousuariosPage]
})
export class CadastrousuariosPageModule {}
