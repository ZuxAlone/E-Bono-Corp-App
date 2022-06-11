import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bono, MetodoFinanciero, TipoCambio } from '../shared/bono.model';
import { BonoService } from '../shared/bono.service';

@Component({
  selector: 'app-new-bono-pri',
  templateUrl: './new-bono-pri.component.html',
  styleUrls: ['./new-bono-pri.component.css']
})
export class NewBonoPriComponent implements OnInit {

  public invalid: boolean = true;

  bonoReq = {
    valorNominal: 0,
    tasaAnual: 0,
    tipoTasa: "Efectiva",
    periodoPago: "Anual",
    vencimientoAnios: 0,
    metodoFinanciero: "",
    tipoCambio: ""
  }

  bono!: Bono;
  metodos!: MetodoFinanciero[];
  tipoCambios!: TipoCambio[];

  constructor(private bonoService: BonoService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.bonoService.getMetodos().subscribe((data:any[]) => {
      this.metodos = data;
    });
    this.bonoService.getCambios().subscribe((data:any[]) => {
      this.tipoCambios = data;
    })
  }

  emitir(): void {
    this.bonoService.emitirBonoPrimario(this.bonoReq).subscribe((data:any) => {
      this.bono = data;
      alert(`Bono ${this.bono.id} ha sido emitido con éxito`);
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    })
  }
}
