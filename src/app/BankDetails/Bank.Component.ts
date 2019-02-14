
import {OnInit, Component} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Bank } from '../_models/Bank';
import { BankService } from '../_services/Bank.Service';


@Component({
    selector : 'BankDetails',
    templateUrl: '',
  
   
})

export class BankComponent{
    CB: Bank = new Bank(); 
    response:string;

     constructor( public ess:BankService){

    }
    addCandidate(mform){
        this.ess.sendToServer(this.CB).subscribe(
            data =>{
                this.response=data['Progress']
            }
        );
    }
   
}
