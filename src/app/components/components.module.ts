import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@components/shared/shared.module';
import { InnerSidebarComponent } from './inner-sidebar/inner-sidebar.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeadingComponent } from './heading/heading.component';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InnerSidebarComponent,
    SmallCardComponent,
    TableComponent,
    PaginationComponent,
    HeadingComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    InnerSidebarComponent,
    SmallCardComponent,
    TableComponent,
    SharedModule,
    PaginationComponent,
    HeadingComponent,
    FiltersComponent
  ]
})
export class ComponentsModule { }
