import { Address } from './Address';
import { Candidate } from './Candidate';

export class candidateJson{
   
    constructor( public candidate:Candidate,
                 public username?:string, 
                 public password?:string,
                 public candidateContactNumber?:number,
                 
                )
               {
     }
}
