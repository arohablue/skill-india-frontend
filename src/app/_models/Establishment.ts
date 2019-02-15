import { Bank } from './Bank';
import { Address } from './Address';

export class Establishment{
    constructor( estId?:number,
                 estName?:string,
                 estEmail?:string,
                 estUserPassword?:string,
                 estType?:string,
                 domain?:string,
                 estWorkingDays?:number,
                 estContactNumber?:number,
                 estTotalEmp?:number,
                //  estAppStatus?:string
                bank?:Bank,
                // bankId?:number,
                // bankName?:string,
                // bankBranch?:string,
                // bankIFSC?:number,
                // accountNumber?:number
                address?:Address
                // addressId?:number,
                // localAddress?:string,
                // city?:string,
                // state?:string,
                )
               {
     }
}
