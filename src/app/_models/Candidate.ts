import { Address } from './Address';

export class Candidate{
   
    constructor( public address : Address,
                 public candidateName?:string,
                 public candidateContactNumber?:number,
                 public candidateGender?:string,
                 public candidateAadhaarNumber?:number,
                 public candidateEmail?:string,
                 public candidateEducationDetails?:string,
                 public candidateDoB?:number,
                 public candidateRequestStatus?:string,
                 public fathersName?:string,
                 public motherName?:string,
                 public instituteName?:string,
                 public percentage?:string,
                 public qualification?:string,
                )
               {
     }
}
