import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoClientePageRoutingModule } from './nuevo-cliente-routing.module';

import { NuevoClientePage } from './nuevo-cliente.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoClientePageRoutingModule
  ],
  declarations: [NuevoClientePage]
})
export class NuevoClientePageModule {}
