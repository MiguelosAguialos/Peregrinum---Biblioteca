import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroreservasPageRoutingModule } from './cadastroreservas-routing.module';

import { CadastroreservasPage } from './cadastroreservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroreservasPageRoutingModule
  ],
  declarations: [CadastroreservasPage]
})
export class CadastroreservasPageModule {}
