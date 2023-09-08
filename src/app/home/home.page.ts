import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  goToCliente () {
    this.router.navigate(['/cliente']);
  }
  goToNuevoCliente() {
    this.router.navigate(['/nuevo-cliente']);
  }
  goToFormularioReactivo () {
    this.router.navigate(['/ejemreactivo']) ;
  }
}
