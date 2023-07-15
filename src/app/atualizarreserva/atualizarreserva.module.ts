import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarreservaPageRoutingModule } from './atualizarreserva-routing.module';

import { AtualizarreservaPage } from './atualizarreserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarreservaPageRoutingModule
  ],
  declarations: [AtualizarreservaPage]
})
export class AtualizarreservaPageModule {}
