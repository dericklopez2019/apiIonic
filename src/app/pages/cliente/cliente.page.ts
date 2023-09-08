import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  clientes: Cliente[] = [];
  id: number;
  nombre: string;
  email: string;
  telefono: number;
  direccion: string;
  company: string;

  constructor(private router:Router, private service: ClienteService) { 
    service.listar().subscribe(
      data=>{
        this.clientes = data;
        console.log(this.clientes);
    })
  }

  ngOnInit() {
  }
  goToInicio () {
    this.router.navigate(['home']);

  }
  mostrar()
  {
    this.service.guardar({nombreCliente: this.nombre, email: this.email, telefono: this.telefono, direccion: this.direccion, company: this.company }).subscribe(data=>{console.log(data)})
    console.log(this.nombre,this.email,this.telefono,this.direccion, this.company)
  }
  editar(item: any) {
    this.id = item.item.id
    this.nombre = item.item.nombreCliente
    this.email = item.item.email
    this.telefono = item.item.telefono
    this.direccion = item.item.direccion
    this.company = item.item.company
    console.log(item.item.id)

  }
  editarGuardar(){
    this.service.editar({id: this.id, nombreCliente: this.nombre, email: this.email, telefono: this.telefono, direccion: this.direccion, company: this.company}).subscribe(data=>{console.log(data)})
  }
  eliminar(id: number) {
    
    console.log(id)
    this.service.delete(id).subscribe(data=> {console.log(data)})
  }
  goCliente (cliente: Cliente) :
    void {
      const navigationExtras:  NavigationExtras = {
        state: {
          cliente: cliente,
         
        }
      };
      this.router.navigate(['ejemreactivo'],navigationExtras)
    }
}

