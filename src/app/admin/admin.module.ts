import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { NewBonoPriComponent } from './bonos/new-bono-pri/new-bono-pri.component';
import { NewBonoSecComponent } from './bonos/new-bono-sec/new-bono-sec.component';
import { ListBonosPriComponent } from './bonos/list-bonos-pri/list-bonos-pri.component';
import { ListBonosSecComponent } from './bonos/list-bonos-sec/list-bonos-sec.component';
import { BonoInfoComponent } from './bonos/bono-info/bono-info.component';


@NgModule({
  declarations: [
    LayoutComponent,
    UsuarioComponent,
    NewBonoPriComponent,
    NewBonoSecComponent,
    ListBonosPriComponent,
    ListBonosSecComponent,
    BonoInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class AdminModule { }
