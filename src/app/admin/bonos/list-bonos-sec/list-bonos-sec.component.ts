import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BonoInfoComponent } from '../bono-info/bono-info.component';
import { NewBonoSecComponent } from '../new-bono-sec/new-bono-sec.component';
import { Bono } from '../shared/bono.model';
import { BonoService } from '../shared/bono.service';

@Component({
  selector: 'app-list-bonos-sec',
  templateUrl: './list-bonos-sec.component.html',
  styleUrls: ['./list-bonos-sec.component.css']
})
export class ListBonosSecComponent implements OnInit {

  bonos!: Bono[];

  constructor(private bonoService: BonoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBonosSecundarios();
  }

  getBonosSecundarios(): void {
    this.bonoService.getBonosSecundarios().subscribe((data:any[]) => this.bonos = data);
  }
  
  nuevoBonoSec(bonoId: any): void {
    const bonoDialog = this.dialog.open(NewBonoSecComponent, {data: {id: bonoId}});
  }

  viewDetails(bonoInfo: any): void {
    const bonoDialog = this.dialog.open(BonoInfoComponent, {data: {bono: bonoInfo}});
  }

}
