import { Component, Input } from '@angular/core';
import { Competition } from '@app/interfaces/competition';

@Component({
  selector: 'app-inner-sidebar',
  templateUrl: './inner-sidebar.component.html',
  styleUrls: ['./inner-sidebar.component.less']
})
export class InnerSidebarComponent {
  @Input() data!: Competition[];
}
