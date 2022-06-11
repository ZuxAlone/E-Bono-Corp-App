import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BonoInfoComponent } from '../bono-info/bono-info.component';
import { NewBonoPriComponent } from '../new-bono-pri/new-bono-pri.component';
import { NewBonoSecComponent } from '../new-bono-sec/new-bono-sec.component';
import { Bono } from '../shared/bono.model';
import { BonoService } from '../shared/bono.service';

@Component({
  selector: 'app-list-bonos-pri',
  templateUrl: './list-bonos-pri.component.html',
  styleUrls: ['./list-bonos-pri.component.css']
})
export class ListBonosPriComponent implements OnInit {

  bonos!: Bono[];

  constructor(private bonoService: BonoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBonosPrimarios();
  }

  getBonosPrimarios(): void {
    this.bonoService.getBonosPrimarios().subscribe((data:any[]) => {
      this.bonos = data;
    });
  }

  nuevoBonoPri(): void {
    const bonoDialog = this.dialog.open(NewBonoPriComponent);
  }

  nuevoBonoSec(bonoId: any): void {
    const bonoDialog = this.dialog.open(NewBonoSecComponent, {data: {id: bonoId}});
  }

  viewDetails(bonoInfo: any): void {
    const bonoDialog = this.dialog.open(BonoInfoComponent, {data: {bono: bonoInfo}});
  }

}
