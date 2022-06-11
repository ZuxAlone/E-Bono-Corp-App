import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bono, MetodoFinanciero, TipoCambio } from './bono.model';

@Injectable({
  providedIn: 'root'
})
export class BonoService {

  private apiBase: string = environment.apiBase;  

  constructor(private http: HttpClient) { }

  emitirBonoPrimario(bonoReq: any) {
    return this.http.post<Bono>(`${this.apiBase}/bono/primario`, bonoReq);
  }

  emitirBonoSecundario(bonoSecReq: any, bonoId: any) {
    return this.http.post<Bono>(`${this.apiBase}/bono/secundario/${bonoId}`, bonoSecReq);
  }

  getBonosPrimarios() {
    return this.http.get<Bono[]>(`${this.apiBase}/bono/primarios`);
  }

  getBonosSecundarios() {
    return this.http.get<Bono[]>(`${this.apiBase}/bono/secundarios`);
  }

  getMetodos() {
    return this.http.get<MetodoFinanciero[]>(`${this.apiBase}/metodoFinanciero/getMetodos`);
  }

  getCambios() {
    return this.http.get<TipoCambio[]>(`${this.apiBase}/tipoCambio/getCambios`);
  }
}
