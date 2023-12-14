import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ComponentsModule } from '@components/components.module';
import { LayoutsRoutingModule } from '@layouts/layouts-routing.module';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutsRoutingModule
  ],
  exports: [
    DashboardLayoutComponent
  ]
})
export class LayoutsModule { }
