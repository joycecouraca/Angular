import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getListaCliente(): Observable<Cliente[]> {
    const url = `${environment.clienteApi}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  getLembrete(id: number): Observable<Cliente> {
    const url = `${environment.clienteApi}/clientes/${id}`;
    return this.http.get<Cliente>(url);
  }

  addLembrete(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.clienteApi}/clientes/`;
    return this.http.post<Cliente>(url, cliente);
  }

  atualizaLembrete(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.clienteApi}/clientes/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  deletaLembrete(id: number): Observable<Cliente> {
    const url = `${environment.clienteApi}/clientes/${id}`;
    return this.http.delete<Cliente>(url);
  }
}
