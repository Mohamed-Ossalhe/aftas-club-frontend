import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Competition } from '@app/interfaces/competition';
import { CompetitionService } from '@app/services/competition/competition.service';

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.less']
})
export class CreateCompetitionComponent {

  public constructor(private _service: CompetitionService) {}

  public competitionForm: FormGroup = new FormGroup({
    date: new FormControl("", Validators.required),
    startTime: new FormControl("", Validators.required),
    endTime: new FormControl("", Validators.required),
    numberOfParticipants: new FormControl(10, Validators.required),
    location: new FormControl("", Validators.required),
    amount: new FormControl(100, Validators.required)
  });

  public submit() {
    const competition: Competition = this.competitionForm.value
    competition.date = formatDate(competition.date, "dd-MM-yyyy", "en-US");
    this._service.create(competition).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log("completed");
      }
    });
  } 
}
