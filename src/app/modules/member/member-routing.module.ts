import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './pages/member/member.component';
import { CreateMemberComponent } from './pages/create-member/create-member.component';

const routes: Routes = [
  {
    path: "",
    component: MemberComponent
  },
  {
    path: "create",
    component: CreateMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
