
import {OnInit, Component} from '@angular/core';
import { CandidateLoginService } from '../../_services/Candidate.Login.Service';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
    selector : 'CandidateLogin',
    templateUrl: './Candidate.Login.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class CandidateLoginComponent {
        username: string;
        password: string;
        request: string;

        candidateLoginForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;
     constructor( public cls: CandidateLoginService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private router: Router,
                  private authenticationService: AuthenticationService,
                  private alertService: AlertService) {
    }

    ngOnInit() {
      this.candidateLoginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.candidateLoginForm.controls; }

    onSubmit() {

      this.submitted = true;

        // stop here if form is invalid
        if (this.candidateLoginForm.invalid) {
            return;
        }

        this.loading = true;

        this.cls.sendToServer(this.username, this.password).subscribe(
            data =>{
                this.request=data.toString();
                if(!+this.request){
                    alert("login failed");
                    this.username = "";
                    this.password = "";
                }
                else {
                    alert("login Success");
                    // route to dashboard
                }

            }
        );
    }

}
