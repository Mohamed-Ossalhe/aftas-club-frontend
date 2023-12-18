import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { CompetitionModule } from '@modules/competition/competition.module';

const routes: Routes = [
    {
        path: "",
        component: DashboardLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("@modules/competition/competition.module").then(m => m.CompetitionModule)
            },
            {
                path: "members",
                loadChildren: () => import("@modules/member/member.module").then(m => m.MemberModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
