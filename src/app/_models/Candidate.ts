import { Address } from './Address';

export class Candidate{
   
    constructor( 
                 public candidateName?:string,
                 public candidateContactNumber?:number,
                 public candidateGender?:string,
                 public candidateAdharNumber?:number,
                 public candidateEmail?:string,
                 public candidateEducationDetails?:string,
                 public candidateDoB?:number,
                 public candidateRequestStatus?:string,
                 public candidateCourseStatus?:string,
                 
                )
               {
     }
}
