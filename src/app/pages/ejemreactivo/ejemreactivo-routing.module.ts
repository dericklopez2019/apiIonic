import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemreactivoPage } from './ejemreactivo.page';

const routes: Routes = [
  {
    path: '',
    component: EjemreactivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemreactivoPageRoutingModule {}
