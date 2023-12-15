import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ComponentsModule } from '@components/components.module';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { AngularToastifyModule } from 'angular-toastify';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutsRoutingModule,
    AngularToastifyModule
  ]
})
export class LayoutsModule { }
