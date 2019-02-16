
import {OnInit, Component} from '@angular/core';
import { EstablishmentRegistrationService } from '../../_services/Establishment.Registration.Service';
import { Router, ActivatedRoute } from '@angular/router';
import { Establishment } from '../../_models/Establishment';
import { User } from 'src/app/_models/User';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { Bank } from 'src/app/_models/Bank';

import { Address } from 'src/app/_models/Address';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector : 'EstablishmentRegistration',
    templateUrl: './Establishment.Registration.Component.html',
   // styleUrls:['./flights-list.component.css'],
   
})

export class EstablishmentRegistrationComponent{
    response:string;
    model1: User = new User
    model:Establishment = new Establishment(); 
    model2: Bank = new Bank();
    model3: Address = new Address();

    submittedModel: Establishment;
    request: string;

    EstablishmentRegistrationForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

     constructor(   public ess:EstablishmentRegistrationService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,){

    }

    ngOnInit() {
    this.EstablishmentRegistrationForm = this.formBuilder.group({
        username:    [this.model1.username, Validators.required],
        password:    [this.model1.password, Validators.required],
        estName:     [this.model.estName, Validators.required],
        estContactNumber:    [this.model.estContactNumber, Validators.required],
        estType:      [this.model.estType, Validators.required],
        estRegNo:     [this.model.estRegNo, Validators.required],
        estEmail:    [this.model.estEmail, [ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        eWorkingDays:   [this.model.WorkingDays, Validators.required],
        domain:    [this.model.domain, Validators.required],
        bankName: [this.model2.bankName, Validators.required],
        accountNumber: [this.model2.accountNumber,[ Validators.required, Validators.max(18)]],
        branchName: [this.model2.branchName, Validators.required],
        IFSCCode:[this.model2.IFSCCode,[ Validators.required, Validators.max(11)]],
        localAddress: [this.model3.localAddress, Validators.required],
        city :[this.model3.city, Validators.required],
        state:[this.model3.state, Validators.required],
        
    
      });


      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.EstablishmentRegistrationForm.controls; }

    onSubmit({ value, valid }: { value: Establishment, valid: boolean }) {

        this.submitted = true;

        console.log("here")
        // stop here if form is invalid
        if (this.EstablishmentRegistrationForm.invalid) {
            return;

        }

        this.loading = true;

        this.submittedModel = value;
        console.log(this.submittedModel);

        let username = this.model1.username
        let password = this.model1.password

        // const json = {"username" : username , "password" : password , "accounts" : this.model,"bankDetails": this.model2,"address": this.model3}

        // console.log(json);
        // return json;
        
        this.ess.sendToServer(this.model).subscribe(
            data =>{
               
                
            }
            );
        }

        
   
    
    }
    
   

