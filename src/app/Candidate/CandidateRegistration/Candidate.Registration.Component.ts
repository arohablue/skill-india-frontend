
import { Component} from '@angular/core';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/_models/Candidate';
import { CandidateRegistrationService } from 'src/app/_services/Candidate.Registration.Service';
import { User } from 'src/app/_models/User';
import { Address } from 'src/app/_models/Address';


@Component({
    selector : 'CandidateRe',
    templateUrl: './Candidate.Registration.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class CandidateRegistrationComponent {
    model1: User = new User
        model: Candidate = new Candidate();
        model2: Address = new Address();
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
        username:    [this.model1.username, Validators.required],
        password:    [this.model1.password, Validators.required],
        candidateName:     [this.model.candidateName, [ Validators.required, Validators.max(15)]],
        candidateContactNumber:    [this.model.candidateContactNumber, [ Validators.required, Validators.max(10)]],
        candidateGender:    [this.model.candidateGender, Validators.required],
        candidateAdharNumber: [this.model.candidateAdharNumber,[ Validators.required, Validators.max(15)]],
        candidateEmail:    [this.model.candidateEmail, [ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
     //   candidateEducationDetails:  [this.model.candidateEducationDetails, Validators.required],
        candidateDoB:    [this.model.candidateDoB, Validators.required],
        candidateRequestStatus:    [this.model.candidateRequestStatus, Validators.required],
        candidateCourseStatus:    [this.model.candidateCourseStatus, [ Validators.required, Validators.max(15)]],
        localAddress:    [this.model2.localAddress, Validators.required],
        city :[this.model2.city,[ Validators.required,Validators.max(18)]],
        state:[this.model2.state,[ Validators.required,Validators.max(18)]],
        pincode:[this.model2.pincode, [Validators.required,Validators.max(6)]],
        
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

        console.log("222");
        this.loading = true;

        this.submittedModel = value;
        console.log(this.submittedModel);

        let username = this.model1.username
        let password = this.model1.password

        const json = {"username" : username , "password" : password , "accounts" : this.model,"address": this.model2}
        console.log(json)
        return json 
        this.crs.sendToServer(this.model).subscribe(
            data =>{

            }
        );
    }

}
