import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBonosPriComponent } from './bonos/list-bonos-pri/list-bonos-pri.component';
import { ListBonosSecComponent } from './bonos/list-bonos-sec/list-bonos-sec.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "usuario",
        component: UsuarioComponent
      },
      {
        path: "bono-pri",
        component: ListBonosPriComponent
      },
      {
        path: "bono-sec",
        component: ListBonosSecComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
