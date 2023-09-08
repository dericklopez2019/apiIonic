import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder   } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ejemreactivo',
  templateUrl: './ejemreactivo.page.html',
  styleUrls: ['./ejemreactivo.page.scss'],
})
export class EjemreactivoPage implements OnInit {
  
  constructor(private fb: FormBuilder, private service: ClienteService, private router:Router) {
   
   }
  cliente = this.fb.group({
    nombreCliente: ['', [ Validators.required]],
    email: ['', Validators.email],
    telefono: ['' ,[Validators.required]],
    direccion: ['',[Validators.required]],
    company: [''],

  });

  goToInicio () {
    this.router.navigate(['home']);

  }
  guardarDatos(){
    this.service.guardar(this.cliente.value).subscribe(data=>{
      console.log(data);
    });
    console.log(this.cliente.value);
  }
  
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      cliente: Cliente,

    }
    this.cliente = state.cliente;
    this.service.listar(this.cliente).subscribe(data=> {
      this.cliente=data;
    })
  }

}
