import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { HomePageRoutingModule } from './home-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
