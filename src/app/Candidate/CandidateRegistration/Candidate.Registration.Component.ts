
import {OnInit, Component} from '@angular/core';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/_models/Candidate';
import { CandidateRegistrationService } from 'src/app/_services/Candidate.Registration.Service';
import { ValidationService } from 'src/app/_services/ValidationService';




@Component({
    selector : 'CandidateRe',
    templateUrl: './Candidate.Registration.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class CandidateRegistrationComponent {

        model: Candidate = new Candidate();
        submittedModel: Candidate;
        request: string;

        CandidateRegistrationForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;
     constructor( public crs: CandidateRegistrationService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private router: Router,
                  private authenticationService: AuthenticationService,
                  private alertService: AlertService) {
    }

    ngOnInit() {

      this.CandidateRegistrationForm = this.formBuilder.group({
        candidateName:     [this.model.candidateName],
        candidateAdharNumber: [this.model.candidateAdharNumber],
        candidateEmailId:    [this.model.candidateEmailId],
        candidateContactNumber:    [this.model.candidateContactNumber],
        candidateCourseStatus:    [this.model.candidateCourseStatus],
        candidateDoB:    [this.model.candidateDoB],
        candidateFatherName:    [this.model.candidateFatherName],
        candidateEducationDetails:    [this.model.candidateEducationDetails],
        candidateRequestStatus:    [this.model.candidateRequestStatus],
        candidateGender:    [this.model.candidateGender],
        candidateUserId:    [this.model.candidateUserId],
        candidatePassword:    [this.model.candidatePassword],

      });


      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.CandidateRegistrationForm.controls; }

    onSubmit({ value, valid }: { value: Candidate, valid: boolean }) {

        this.submittedModel = value;
        console.log(this.submittedModel)

        this.crs.sendToServer(this.model).subscribe(
            data =>{

            }
        );
    }

}
