
import {OnInit, Component} from '@angular/core';
import { CandidateLoginService } from '../../_services/Candidate.Login.Service';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AdminLoginService } from 'src/app/_services/Admin.Login.Service';




@Component({
    selector : 'AdminLogin',
    templateUrl: './Admin.Login.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class AdminLoginComponent {
        usermodel: User = new User();
        submittedModel: User =  new User();
        fetchedModel: User = new User();
        request: string;
        response : string;
        usercheck : string;
        message : String;


        AdminLoginForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;
     constructor( public cls: AdminLoginService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private authenticationService: AuthenticationService,
                  private router: Router
                  ) {
    }

    ngOnInit() {

      this.AdminLoginForm = this.formBuilder.group({
          username:     [this.usermodel.username, Validators.required],
          password:     [this.usermodel.password, Validators.required],
      });

      // reset login status
      //this.authenticationService.logout();

  }

          // convenience getter for easy access to form fields
    get f() { return this.AdminLoginForm.controls; }

    onSubmit({ value, valid }: { value: User, valid: boolean }) {

        this.submitted = true;

        // stop here if form is invalid
        if (this.AdminLoginForm.invalid) {
            return;
        }
        //this.loading = true;


        this.submittedModel = value;

        console.log(this.submittedModel)

        this.cls.sendToServer(this.submittedModel).subscribe(
          data =>{
              if(data !==null){
                  localStorage.setItem('user', JSON.stringify(data));
                  localStorage.setItem('userId', JSON.stringify(data['adminId']));
                  this.router.navigate(['/admin/dashboard']);
              }

              this.message = "Worng Username or password";
          }
      );
    }

}
