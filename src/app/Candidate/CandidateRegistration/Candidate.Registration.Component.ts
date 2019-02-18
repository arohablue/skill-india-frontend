
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
import { candidateJson } from 'src/app/_models/candidateJson';
import { HttpEventType, HttpClient } from '@angular/common/http';


@Component({
    selector : 'CandidateRe',
    templateUrl: './Candidate.Registration.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class CandidateRegistrationComponent {
        userModel: User = new User
        candModel: Candidate = new Candidate(null);
        canAddressModel: Address = new Address();
        candiateJsondata : candidateJson = new candidateJson(new Candidate(new Address()));
        request: string;
        usercheck : string;
        confpassword : string;
        message : string;
        response : string
        selectedFile: File = null;
        minAge : Date ;

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
                  private alertService: AlertService,
                  private http: HttpClient) {
    }

    ngOnInit() {

      var today = new Date();
      var minAge = 18;
      this.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

      this.CandidateRegistrationForm = this.formBuilder.group({

        username:    [this.candiateJsondata.username, Validators.required],
        password:    [this.candiateJsondata.password, Validators.required],
        confpassword : [this.confpassword, Validators.required],
        candidateName:     [this.candiateJsondata.candidate.candidateName, [ Validators.required, Validators.max(15)]],
        candidateContactNumber:    [this.candiateJsondata.candidate.candidateContactNumber, Validators.required],
        candidateGender:    [this.candiateJsondata.candidate.candidateGender, Validators.required],
        candidateAadhaarNumber: [this.candiateJsondata.candidate.candidateAadhaarNumber,[ Validators.required, Validators.pattern("^\d{4}\s\d{4}\s\d{4}$")]],
        candidateEmail:    [this.candiateJsondata.candidate.candidateEmail,  [Validators.required, Validators.email]],
        candidateDoB:    [this.candiateJsondata.candidate.candidateDoB, Validators.required],
        candidateFatherName:    [this.candiateJsondata.candidate.fathersName, Validators.required],
        candidateMotherName:    [this.candiateJsondata.candidate.motherName, Validators.required],
        instituteName:    [this.candiateJsondata.candidate.instituteName, Validators.required],
        percentage:    [this.candiateJsondata.candidate.percentage, Validators.required],
        qualification:    [this.candiateJsondata.candidate.qualification, Validators.required],
        streetName:    [this.candiateJsondata.candidate.address.streetName, Validators.required],
        candidateCity :[this.candiateJsondata.candidate.address.city,[ Validators.required,Validators.max(18)]],
        candidateState:[this.candiateJsondata.candidate.address.state,[ Validators.required,Validators.max(18)]],
        candidatePincode:[this.candiateJsondata.candidate.address.pincode, [Validators.required,Validators.max(6)]],

      });


      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.CandidateRegistrationForm.controls; }



    onSubmit({ value, valid }: { value: FormGroup, valid: boolean }) {


        this.submitted = true;
        console.log("in onSubmit");
        console.log(value);
        // stop here if form is invalid

        //this.candiateJsondata = value;

        console.log("validated");
        this.loading = true;
       // console.log(this.submittedModel);

      var json =  {
        "username" :  this.CandidateRegistrationForm.get('username').value,
       "password" : this.CandidateRegistrationForm.get('password').value,
       "candidate" : {
       "candidateName":  this.CandidateRegistrationForm.get('candidateName').value,
       "candidateContactNumber":  this.CandidateRegistrationForm.get('candidateContactNumber').value,
       "candidateGender": this.CandidateRegistrationForm.get('candidateGender').value,
       "candidateAadhaarNumber": this.CandidateRegistrationForm.get('candidateAadhaarNumber').value,
       "candidateEmail": this.CandidateRegistrationForm.get('candidateEmail').value,
       "candidateDoB":  this.CandidateRegistrationForm.get('candidateDoB').value,
       "fathersName" : this.CandidateRegistrationForm.get('candidateFatherName').value,
       "motherName" : this.CandidateRegistrationForm.get('candidateMotherName').value,
       "instituteName" :  this.CandidateRegistrationForm.get('instituteName').value,
       "percentage" : this.CandidateRegistrationForm.get('percentage').value,
       "qualification" : this.CandidateRegistrationForm.get('qualification').value,
            "address" : {
                    "streetName" :  this.CandidateRegistrationForm.get('streetName').value,
                    "state" :  this.CandidateRegistrationForm.get('candidateState').value,
                     "city"  : this.CandidateRegistrationForm.get('candidateCity').value,
                }
            }
        }
        console.log(json)
        this.crs.sendToServer(json).subscribe(
            data =>{
                if(data !==null){
                    this.router.navigate(['/candidate/login']);
                }
               this.router.navigate(['/candidate/registration']);
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


    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
      }

    onUpload() {
        const formData = new FormData();
        formData.append('image',this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:8084/upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%')
            console.log('status');

          }
          else if (event.type === HttpEventType.Response) {
            console.log(event);
          }
        });
      }

}
