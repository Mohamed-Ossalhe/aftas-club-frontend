import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesModule } from '@routes/routes.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("@routes/routes.module").then((m):typeof RoutesModule => m.RoutesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
