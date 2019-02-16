
import { Component} from '@angular/core';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/_models/Candidate';
import { CandidateRegistrationService } from 'src/app/_services/Candidate.Registration.Service';
import { User } from 'src/app/_models/User';
import { Address } from 'src/app/_models/Address';
import { AdminLoginService } from 'src/app/_services/Admin.Login.Service';
import { MustMatch } from 'src/app/_models/must-match.validators';


@Component({
    selector : 'CandidateRe',
    templateUrl: './Candidate.Registration.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class CandidateRegistrationComponent {
        userModel: User = new User
        candModel: Candidate = new Candidate();
        canAddressModel: Address = new Address();
        request: string;
        usercheck : string;
        confpassword : string;
        message : string;

        CandidateRegistrationForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;

     constructor( public crs: CandidateRegistrationService,
                  public cls: AdminLoginService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private router: Router,
                  private authenticationService: AuthenticationService,
                  private alertService: AlertService) {
    }
    
    ngOnInit() {

      this.CandidateRegistrationForm = this.formBuilder.group({
        username:    [this.userModel.username, Validators.required],
        password:    [this.userModel.password, Validators.required],
        confpassword : [this.confpassword, Validators.required],
        // confpassword : [this.confpassword, [Validators.required ,{
        //     validator: MustMatch('password', 'confpassword')
        // }]],
        candidateName:     [this.candModel.candidateName, [ Validators.required, Validators.max(15)]],
        candidateContactNumber:    [this.candModel.candidateContactNumber, Validators.required],
        candidateGender:    [this.candModel.candidateGender, Validators.required],
        candidateAadhaarNumber: [this.candModel.candidateAadhaarNumber,[ Validators.required, Validators.max(15)]],
        candidateEmail:    [this.candModel.candidateEmail,  [Validators.required, Validators.email]],
        candidateDoB:    [this.candModel.candidateDoB, Validators.required],
        candidateFatherName:    [this.candModel.fathersName, Validators.required],
        candidateMotherName:    [this.candModel.motherName, Validators.required],
        candidateRequestStatus:    [this.candModel.candidateRequestStatus, Validators.required],
        candidateCourseStatus:    [this.candModel.candidateCourseStatus, [ Validators.required, Validators.max(15)]],
        address:    [this.canAddressModel.localAddress, Validators.required],
        city :[this.canAddressModel.city,[ Validators.required,Validators.max(18)]],
        state:[this.canAddressModel.state,[ Validators.required,Validators.max(18)]],
        pincode:[this.canAddressModel.pincode, [Validators.required,Validators.max(6)]],
        
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
        console.log("in onSubmit");
        // stop here if form is invalid
        if (this.CandidateRegistrationForm.invalid) {
            console.log("you are invalid")
            return;
        }

        console.log("validated");
        this.loading = true;

        console.log(value)
       // console.log(this.submittedModel);


        //const json = {"username" : username , "password" : password , "accounts" : this.userModel,"address": this.canAddressModel}
        //console.log(json)
       // return json 
        this.crs.sendToServer(this.userModel).subscribe(
            data =>{

            }
        );
    }

    check(value) {

        this.cls.checkUser(value).subscribe(
            data =>{
                
                this.usercheck = data['message'];
                console.log(this.usercheck);
                if(this.usercheck == "true") {
                    this.message = "User name already present"
                    console.log(this.message);
                }
                this.message = "";
            }
        );
        
    }

}
