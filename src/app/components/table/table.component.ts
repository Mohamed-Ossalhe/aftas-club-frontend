import { Component, Input } from '@angular/core';
import { Competition } from '@app/interfaces/competition';
import { Ranking } from '@interfaces/ranking';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent {
  @Input({required: true}) data!: any;
}
