import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from '@modules/competition/pages/competition/competition.component';
import { CreateCompetitionComponent } from './pages/create-competition/create-competition.component';
import { AssignMemberComponent } from './pages/assign-member/assign-member.component';

const routes: Routes = [
  {
    path:"",
    component: CompetitionComponent,
  },
  {
    path:"competitions",
    component: CompetitionComponent,
  },
  {
    path: "competitions/create",
    component: CreateCompetitionComponent
  },
  {
    path: "competitions/:id/assign",
    component: AssignMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule { }
