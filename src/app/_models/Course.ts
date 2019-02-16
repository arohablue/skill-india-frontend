import { Establishment } from './Establishment';

export class Course{
    constructor(
        public courseId?:number,
        public courseName?:string,
        public courseDescription?:string,
        public courseDuration?:number,
        public trainerName?:string,
        public courseAmount?:number,
        public  trainerContactNumber?:number,
        
    ){}
}