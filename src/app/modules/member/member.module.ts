import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './pages/member/member.component';
import { CreateMemberComponent } from './pages/create-member/create-member.component';
import { ComponentsModule } from '@app/components/components.module';


@NgModule({
  declarations: [
    MemberComponent,
    CreateMemberComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ComponentsModule
  ]
})
export class MemberModule { }
