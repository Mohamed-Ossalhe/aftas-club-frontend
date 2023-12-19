import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompetitionRoutingModule } from '@modules/competition/competition-routing.module';
import { ComponentsModule } from '@components/components.module';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionService } from '@app/services/competition/competition.service';
import { CreateCompetitionComponent } from './pages/create-competition/create-competition.component';
import { AssignMemberComponent } from './pages/assign-member/assign-member.component';


@NgModule({
  declarations: [
    CompetitionComponent,
    CreateCompetitionComponent,
    AssignMemberComponent
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    ComponentsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    CompetitionService
  ]
})
export class CompetitionModule { }
