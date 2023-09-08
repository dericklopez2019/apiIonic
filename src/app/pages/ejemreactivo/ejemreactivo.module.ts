import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { EjemreactivoPageRoutingModule } from './ejemreactivo-routing.module';

import { EjemreactivoPage } from './ejemreactivo.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EjemreactivoPageRoutingModule
  ],
  declarations: [EjemreactivoPage]
})
export class EjemreactivoPageModule {}
