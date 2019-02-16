import { Address } from './Address';

export class Candidate{
    constructor( public candidateUserId?:string,
                 public candidateName?:string,
                 public candidateDoB?:number,
                 public candidateGender?:string,
                 public candidateFatherName?:string,
                 public candidateMotherName?:string,
                 public candidateAadhaarNumber?:number,
                 public candidateCategory?:string,

                 public candidateContactNumber?:number,
                 public candidateEmail?:string,
                 public candidatePassword?:string,
                 
                public qualification?:string,
                public instituteName?:string,
                public percentage?:number,
                 
                public candidateRequestStatus?:string,
                //  public candidateCourseStatus?:string
           



                )
               {
     }
}
