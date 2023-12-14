import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@app/components/components.module';
import { CompetitionModule } from './competition/competition.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompetitionModule,
    ComponentsModule
  ]
})
export class PagesModule { }
