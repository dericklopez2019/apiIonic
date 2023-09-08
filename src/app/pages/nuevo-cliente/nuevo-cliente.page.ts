import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.page.html',
  styleUrls: ['./nuevo-cliente.page.scss'],
})
export class NuevoClientePage implements OnInit {
  cliente = new Cliente(0,"Derick","derick@gmail.com",12345678,"Quetzaltenango","sadasf");
  constructor(private service:ClienteService) { 
    service.guardar1(this.cliente).subscribe(data=>{
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
