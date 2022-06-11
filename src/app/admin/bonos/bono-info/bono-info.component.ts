import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bono } from '../shared/bono.model';

@Component({
  selector: 'app-bono-info',
  templateUrl: './bono-info.component.html',
  styleUrls: ['./bono-info.component.css']
})
export class BonoInfoComponent implements OnInit {

  bono: Bono;
  flujos: any[] = [];
  element: any = {};
  displayedColumns: string[] = ["Periodo", "Inversión", "Cuota"];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.bono = this.data.bono;
  }

  ngOnInit(): void {
    this.element = { periodo: 0, inversion: this.bono.valorNominal, cuota: 0};
    this.flujos.push(this.element);

    if (this.bono.numeroPeriodos) {
      for (let i = 1; i <= this.bono.numeroPeriodos; i++) {
        this.element = { periodo: i, inversion: 0, cuota: this.bono.anualidad};
        this.flujos.push(this.element);
      }
    }
  }

}
