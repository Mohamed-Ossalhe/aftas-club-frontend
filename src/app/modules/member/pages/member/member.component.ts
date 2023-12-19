import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '@app/interfaces/member';
import { MemberService } from '@services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.less']
})
export class MemberComponent {

  dataObject: any;
  members:Member[] = [];
  page: number = 0;
  message:string = "";

  constructor(private __service: MemberService, private _router: ActivatedRoute) {}

  ngOnInit() {
    this._router.queryParams.subscribe({
      next: (params) => {
        this.page = params["page"] || 0;
        this.__service.getAllPaginated(this.page).subscribe((response: any) => {
          this.members = response.content;
          this.dataObject = response;
          console.log(response);
          
          if (this.members.length == 0) {
            this.message = "No Members Found";
          }
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
