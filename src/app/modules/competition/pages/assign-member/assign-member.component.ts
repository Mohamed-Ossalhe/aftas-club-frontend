import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '@app/interfaces/member';
import { MemberService } from '@services/member/member.service';
import { RankingService } from '@services/ranking/ranking.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-assign-member',
  templateUrl: './assign-member.component.html',
  styleUrls: ['./assign-member.component.less']
})
export class AssignMemberComponent implements OnInit {

  members: Member[] = [];
  originalMember: Member[] = [];
  competitionId: string = "";

  public constructor(
    private __MemberService: MemberService,
    private __rankingService: RankingService,
    private __toast: ToastService,
    private __activeRoute: ActivatedRoute,
    private __router: Router) { }

  ngOnInit() {
    this.__activeRoute.params.subscribe(({ id }: any) => {
      this.competitionId = id;
    })
    this.getAllMembers();
  }

  public getAllMembers() {
    try {
      this.__MemberService.getAll().subscribe((response: Member[]) => {
        this.members = response;
        this.originalMember = response;
      });
    } catch (error) {
      console.log(error);
    }
  }


  public filterMembers(search: string) {
    if (search != "")
      this.members = this.members.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
    else
      this.members = Array.from(this.originalMember);
  }

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {validators: [Validators.required, Validators.nullValidator], nonNullable: true }),
    competition: new FormControl({ value: `${this.competitionId}`, disabled: true }, { validators: [Validators.required, Validators.nullValidator], nonNullable: true }),
    rank: new FormControl({ value: 0, disabled: true }, { validators: [Validators.required, Validators.nullValidator], nonNullable: true }),
    score: new FormControl({ value: 0, disabled: true }, { validators: [Validators.required, Validators.nullValidator], nonNullable: true })
  });

  public submit() {
    if (this.formGroup.valid) {
      this.formGroup.value.competition = {code:this.competitionId};
      this.formGroup.value.member = {num:this.formGroup.value.name};
      this.formGroup.value.rank = 0;
      this.formGroup.value.score = 0;
      if (this.formGroup.dirty) {
        this.__rankingService.create(this.formGroup.value).subscribe({
          next: () => {
            this.__router.navigate(["/competitions"], {queryParams: {competition: this.competitionId}});
            this.__toast.success("Member assigned to competition");
          },
          error: ({error}) => {
            this.__toast.error(error.body.detail);
            
          }
        })
      }
    } else {
      this.__toast.warn("Form is invalid, Please chose a Member");
    }


    // if (this.formGroup.valid) {
    //   this.__service.create(this.formGroup.value).subscribe({
    //     next: () => {
    //       this.__router.navigate(["/members"]);
    //       this.__toast.success("Member Created Successfully");
    //     },
    //     error: () => {
    //       this.__toast.error("Sorry! something went wrong");
    //     }
    //   });
    // } else {
    //   this.__toast.warn("Please make sure all fields are valid.");
    // }
  }
}
