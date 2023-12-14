import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '@layouts/layouts.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("@layouts/layouts.module").then((m): typeof LayoutsModule => m.LayoutsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
