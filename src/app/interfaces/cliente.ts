import { Guid } from 'guid-typescript';
import { DatePipe } from '@angular/common';
export interface Cliente {
    id: string;
    nome: string;
    dataNascimento: DatePipe;
    sexo: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    estado: string;
    cidade: string;
    creatAt: DatePipe;
    updateAt: DatePipe;
}
