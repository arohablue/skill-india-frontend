
import {OnInit, Component} from '@angular/core';
import { CandidateLoginService } from '../../_services/Candidate.Login.Service';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { Candidate } from 'src/app/_models/Candidate';




@Component({
    selector : 'CandidateLogin',
    templateUrl: './Candidate.Login.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class CandidateLoginComponent {
        usermodel: User = new User();
        submittedModel:User =  new User();
        fetchedModel: Candidate = new Candidate();
        request: string;
        response : string;
        usercheck : string;
        candId : string;
        candName : string;
        message : String;

        candidateLoginForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;
        
     constructor( public cls: CandidateLoginService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private authenticationService: AuthenticationService,
                  private router: Router
                  ) {
    }

    ngOnInit() {

      this.candidateLoginForm = this.formBuilder.group({
          username:     [this.usermodel.username, Validators.required],
          password:     [this.usermodel.password, Validators.required],
      });

      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.candidateLoginForm.controls; }

    onSubmit({ value, valid }: { value: User, valid: boolean }) {

        this.submitted = true;

        // stop here if form is invalid
        if (this.candidateLoginForm.invalid) {
            return;
        }
        //this.loading = true;


        this.submittedModel = value;

        console.log(this.submittedModel)

        this.cls.sendToServer(this.submittedModel).subscribe(
            data =>{
                if(data !==null){
                    this.candId = data['candidateId'] ;
                    this.candName = data['candidateName'];
                    this.router.navigate(['/candidate/dashboard']);
                } 

                this.message = "Worng Username or password";
            }
        );
    }

    check(value) {

        this.cls.checkUser(value).subscribe(
            data =>{
                this.usercheck = data['message'];
                console.log(this.usercheck)
            }
        );
        
    }

}
