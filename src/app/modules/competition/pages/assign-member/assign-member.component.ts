import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '@app/services/member/member.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-assign-member',
  templateUrl: './assign-member.component.html',
  styleUrls: ['./assign-member.component.less']
})
export class AssignMemberComponent {
  public constructor(private __service: MemberService, private __toast: ToastService, private __router: Router) { }

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.nullValidator]),
    familyName: new FormControl('', [Validators.required, Validators.nullValidator]),
    accessionDate: new FormControl('', [Validators.required, Validators.nullValidator]),
    nationality: new FormControl('', [Validators.required, Validators.nullValidator]),
    identityDocument: new FormControl('', [Validators.required, Validators.nullValidator]),
    identityNumber: new FormControl('', [Validators.required, Validators.nullValidator])
  });

  public submit() {
    if (this.formGroup.valid) {
      this.__service.create(this.formGroup.value).subscribe({
        next: () => {
          this.__router.navigate(["/members"]);
          this.__toast.success("Member Created Successfully");
        },
        error: () => {
          this.__toast.error("Sorry! something went wrong");
        }
      });
    } else {
      this.__toast.warn("Please make sure all fields are valid.");
    }
  }
}
