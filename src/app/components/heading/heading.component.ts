import { Component, Input } from '@angular/core';
import { Competition } from '@app/interfaces/competition';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.less']
})
export class HeadingComponent {
  @Input() data!:Competition;
}
