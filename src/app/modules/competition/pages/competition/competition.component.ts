import { Component } from '@angular/core';
import { Competition } from '@interfaces/competition';
import { CompetitionService } from '@services/competition/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.less']
})
export class CompetitionComponent {

  competitions: Competition[] = [];

  public constructor(private _service: CompetitionService) {
    this.getAllCompetitions();
  }

  private getAllCompetitions() {
    this._service.getAll().subscribe((response: any) => {
      this.competitions = response?.content;
      console.log(response?.content);
    })
    
  }
}
