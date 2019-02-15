
import { Component} from '@angular/core';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/_models/Candidate';
import { CandidateRegistrationService } from 'src/app/_services/Candidate.Registration.Service';




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
        candidateName:     [this.model.candidateName, Validators.required],
        candidateAdharNumber: [this.model.candidateAdharNumber,Validators.required],
        candidateEmailId:    [this.model.candidateEmailId, Validators.required],
        candidateContactNumber:    [this.model.candidateContactNumber, Validators.required],
        //candidateCourseStatus:    [this.model.candidateCourseStatus, Validators.required],
        candidateDoB:    [this.model.candidateDoB, Validators.required],
        candidateFatherName:    [this.model.candidateFatherName, Validators.required],
        //candidateEducationDetails:    [this.model.candidateEducationDetails, Validators.required],
        //candidateRequestStatus:    [this.model.candidateRequestStatus, Validators.required],
        candidateGender:    [this.model.candidateGender, Validators.required],
        candidateUserId:    [this.model.candidateUserId, Validators.required],
        candidatePassword:    [this.model.candidatePassword, Validators.required]

      });


      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.CandidateRegistrationForm.controls; }

    onSubmit({ value, valid }: { value: Candidate, valid: boolean }) {

        this.submitted = true;

        console.log("here")
        // stop here if form is invalid
        if (this.CandidateRegistrationForm.invalid) {
            return;
        }

        console.log("222")
        this.loading = true;


        this.submittedModel = value;
        console.log(this.submittedModel)

        this.crs.sendToServer(this.model).subscribe(
            data =>{

            }
        );
    }

}
