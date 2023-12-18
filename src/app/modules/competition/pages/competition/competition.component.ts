import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '@interfaces/competition';
import { CompetitionService } from '@services/competition/competition.service';
import { Ranking } from '@app/interfaces/ranking';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.less']
})
export class CompetitionComponent {

  competitions: Competition[] = [];
  dataObject!: any;
  members!: Competition;
  message!: string;
  page: number = 0;

  public constructor(private _service: CompetitionService, private _router: ActivatedRoute) {
  }

  ngOnInit() {
    try {
      this._router.queryParams.subscribe({
        next: (params) => {
          const code = params["competition"];
          this.page = params["page"] || 0;
          this.getAllMembers(code);
          this._service.getAll(this.page).subscribe((response: any) => {
            this.competitions = response.content;
            this.dataObject = response;
            console.log(response);
          })
        }
      })
    }catch(error) {
      console.log(error);
    }
  }

  private getAllMembers(param: string) {
      this._service.get(param).subscribe({
        next: (response: Competition) => {
          this.message = "";
          this.members = response;
          console.log(response);
          
        },
        error: ({error}) => {
          const {body} = error;
          if (body?.status == 404){
            this.message = "No Competition Selected";
          }
        },
        complete: () => {}
      })
  }
}
