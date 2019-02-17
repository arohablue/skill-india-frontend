import { Bank } from './Bank';
import { Address } from './Address';

export class Establishment{
    constructor(
                public estName?:string,
                public estEmail?:string,
                public  estType?:string,
                public domain?:string,
                public estRegNo?:string,
                public WorkingDays?:number,
                public estContactNumber?:number,
                
                )
               {
     }
}
