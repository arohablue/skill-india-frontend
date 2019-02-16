
import {OnInit, Component} from '@angular/core';
import { EstablishmentRegistrationService } from '../../_services/Establishment.Registration.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Establishment } from '../../_models/Establishment';
import { HttpEventType } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';


@Component({
    selector : 'EstablishmentRegistration',
    templateUrl: './Establishment.Registration.Component.html',
   
})

export class EstablishmentRegistrationComponent{
    est: Establishment = new Establishment(); 
    response:string;
    selectedFile: File = null;

     constructor(   public ess:EstablishmentRegistrationService,
                    private route: ActivatedRoute,
                    private router: Router,
                    private http:HttpClient){

    }
    addEstablishment(){
        this.ess.sendToServer(this.est).subscribe(
            data =>{
                this.response=data['message']
                if(!this.response) {
                    this.router.navigate(['/establishment/login']);
                }
                
            }
        );
    }

    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
      }

    onUpload() {
        const formData = new FormData();
        formData.append('image',this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:8085/upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
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
