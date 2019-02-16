
import {OnInit, Component} from '@angular/core';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { EstablishmentLoginService } from 'src/app/_services/Establishment.Login.service';
import { Establishment } from 'src/app/_models/Establishment';




@Component({
    selector : 'EstablishmentLogin',
    templateUrl: './Establishment.Login.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class EstablishmentLoginComponent {
        usermodel: User = new User();
        submittedModel:User =  new User();
        fetchedModel: Establishment = new Establishment();
        request: string;
        response : string;
        usercheck : string;


        EstablishmentLoginForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;
     constructor( public cls: EstablishmentLoginService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private authenticationService: AuthenticationService,
                  private router: Router
                  ) {
    }

    ngOnInit() {

      this.EstablishmentLoginForm = this.formBuilder.group({
          username:     [this.usermodel.username, Validators.required],
          password:     [this.usermodel.password, Validators.required],
      });

      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.EstablishmentLoginForm.controls; }

    onSubmit({ value, valid }: { value: User, valid: boolean }) {

        this.submitted = true;

        // stop here if form is invalid
        if (this.EstablishmentLoginForm.invalid) {
            return;
        }
        //this.loading = true;


        this.submittedModel = value;

        console.log(this.submittedModel)

        this.cls.sendToServer(this.submittedModel).subscribe(
            data =>{
                this.fetchedModel = data;
                console.log("data" + data)
                console.log("establishment" + this.fetchedModel)
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
