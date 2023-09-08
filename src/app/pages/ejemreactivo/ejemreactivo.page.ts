import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup   } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ejemreactivo',
  templateUrl: './ejemreactivo.page.html',
  styleUrls: ['./ejemreactivo.page.scss'],
})
export class EjemreactivoPage implements OnInit {
  cliente: Cliente;
  formCliente: FormGroup;
  constructor(private fb: FormBuilder, private service: ClienteService, private router:Router) {
    this.formCliente = this.fb.group({
      nombreCliente: ['', [ Validators.required]],
      email: ['', Validators.email],
      telefono: ['' ,[Validators.required]],
      direccion: ['',[Validators.required]],
      company: [''],
  
    });
   }
   
  

  goToInicio () {
    this.router.navigate(['home']);

  }
  guardarDatos(){
    this.service.guardar(this.formCliente.value).subscribe(data=>{
      console.log(data);
    });
    console.log(this.formCliente.value);
  }
  
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      cliente: Cliente,

    };
    this.cliente = state.cliente;
    console.log(this.cliente);
    this.formCliente.patchValue({
      id: this.cliente.id,
      nombreCliente: this.cliente.nombreCliente,
      email: this.cliente.email,
      telefono: this.cliente.telefono,
      direccion: this.cliente.direccion,
      company: this.cliente.company
    });
    // this.service.listar().subscribe(data=> {
    //   this.cliente=data;
    // })
  }

}
