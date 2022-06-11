import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bono } from '../shared/bono.model';
import { BonoService } from '../shared/bono.service';

@Component({
  selector: 'app-new-bono-sec',
  templateUrl: './new-bono-sec.component.html',
  styleUrls: ['./new-bono-sec.component.css']
})
export class NewBonoSecComponent implements OnInit {

  public invalid: boolean = true;
  
  bonoSecReq = {
    tasaAnualSec: 0,
    tipoTasaSec: "Efectiva",
    numPeriodoCompra: 0
  }
  
  bonoId: any;
  bono!: Bono;

  constructor(private bonoService: BonoService, private router: Router, @Inject(MAT_DIALOG_DATA) public data:any) { 
    this.bonoId = this.data.id;
  }

  ngOnInit(): void {
  }

  emitir(): void {
    this.bonoService.emitirBonoSecundario(this.bonoSecReq, this.bonoId).subscribe((data:any) => {
      this.bono = data;
      alert(`Bono ${this.bono.id} ha sido emitido con éxito`);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(["/admin/bono-sec"]);
    })
  }

}
