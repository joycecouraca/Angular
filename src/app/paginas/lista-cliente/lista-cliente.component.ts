import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  public clientes: Cliente[];


  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getListaClientes();
  }

  getListaClientes() {
    this.clienteService.getListaCliente()
      .subscribe((cliente: Cliente[]) => {
        this.clientes = cliente;
      });
  }

  deletaCliente(id: number) {
    this.clienteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaClientes();
      });
  }

  existemClientes(): boolean {
    return this.clientes && this.clientes.length > 0;
  }

}
