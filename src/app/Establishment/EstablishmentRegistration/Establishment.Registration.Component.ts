
import { Component} from '@angular/core';
import { AuthenticationService, AlertService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Establishment } from 'src/app/_models/Establishment';
import { EstablishmentRegistrationService } from 'src/app/_services/Establishment.Registration.Service';
import { User } from 'src/app/_models/User';
import { Address } from 'src/app/_models/Address';
import { AdminLoginService } from 'src/app/_services/Admin.Login.Service';
import { MustMatch } from 'src/app/_models/must-match.validators';
import { Bank } from 'src/app/_models/Bank';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
    selector : 'EstablishmentRe',
    templateUrl: './Establishment.Registration.Component.html',
    // styleUrls:['./flights-list.component.css'],

})

export class EstablishmentRegistrationComponent {
        userModel: User = new User
        estModel: Establishment = new Establishment(null);
        estAddressModel: Address = new Address();
        estBankModel: Bank = new Bank();
        request: string;
        usercheck : string;
        confpassword : string;
        message : string;
        response : string;
        selectedFile: File = null;


        EstablishmentRegistrationForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;

     constructor( public crs: EstablishmentRegistrationService,
                  public cls: AdminLoginService,
                  private formBuilder: FormBuilder,
                  private route: ActivatedRoute,
                  private router: Router,
                  private authenticationService: AuthenticationService,
                  private alertService: AlertService,
                  private http : HttpClient) {
    }

    ngOnInit() {

      this.EstablishmentRegistrationForm = this.formBuilder.group({
        username:    [this.userModel.username, Validators.required],
        password:    [this.userModel.password, Validators.required],
        confpassword : [this.confpassword, Validators.required],
        // confpassword : [this.confpassword, [Validators.required ,{
        //     validator: MustMatch('password', 'confpassword')
        // }]],
        estName:     [this.estModel.estName, Validators.required],
        estContactNumber:    [this.estModel.estContactNumber, Validators.required],
        estType:      [this.estModel.estType, Validators.required],
        estEmail:    [this.estModel.estEmail, [ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        estWorkingDays:   [this.estModel.WorkingDays, Validators.required],
        domain:    [this.estModel.domain, Validators.required],
        estTotalEmp:    [this.estModel.estTotalEmp, Validators.required],

        // bank details
        bankName: [this.estBankModel.bankName, Validators.required],
        accountNumber: [this.estBankModel.accountNumber,[ Validators.required, Validators.max(18)]],
        branchName: [this.estBankModel.branchName, Validators.required],
        IFSCCode:[this.estBankModel.IFSCCode,[ Validators.required, Validators.max(11)]],

        // address details
        streetName: [this.estAddressModel.streetName, Validators.required],
        EstablishmentState :[this.estAddressModel.state, Validators.required],
        EstablishmentCity:[this.estAddressModel.city, Validators.required],
        pincode:[this.estAddressModel.pincode, Validators.required],


      });


      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

          // convenience getter for easy access to form fields
    get f() { return this.EstablishmentRegistrationForm.controls; }



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
       "username" :  this.EstablishmentRegistrationForm.get('username').value,
       "password" : this.EstablishmentRegistrationForm.get('password').value,

       "establishment" : {
       "estName":  this.EstablishmentRegistrationForm.get('estName').value,
       "estContactNumber":  this.EstablishmentRegistrationForm.get('estContactNumber').value,
       "estType":  this.EstablishmentRegistrationForm.get('estType').value,
       "estEmail": this.EstablishmentRegistrationForm.get('estEmail').value,
       "workingDays" :this.EstablishmentRegistrationForm.get('estWorkingDays').value,
       "domain" :this.EstablishmentRegistrationForm.get('domain').value,
       "estTotalEmp" :this.EstablishmentRegistrationForm.get('estTotalEmp').value,

            "address" : {
                    "streetName" :  this.EstablishmentRegistrationForm.get('streetName').value,
                    "state" :  this.EstablishmentRegistrationForm.get('EstablishmentState').value,
                    "city"  : this.EstablishmentRegistrationForm.get('EstablishmentCity').value,
                    "pincode"  : this.EstablishmentRegistrationForm.get('pincode').value
                },
                "bankDetails" : {
                    "bankName" : this.EstablishmentRegistrationForm.get('bankName').value,
                    "bankBranch" :this.EstablishmentRegistrationForm.get('bankBranch').value,
                    "bankIFSC" : this.EstablishmentRegistrationForm.get('bankIFSC').value,
                    "accountNumber" :this.EstablishmentRegistrationForm.get('accountNumber').value,
                }

            }
        }

        this.crs.sendToServer(json).subscribe(
            data =>{
                this.response = data['message'];
               if(this.response == "added") {
                console.log("added");
                this.router.navigate(['/establishment/login']);
               }
               this.router.navigate(['/establishment/registration']);
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
