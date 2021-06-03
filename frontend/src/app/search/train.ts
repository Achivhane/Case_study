export class Train {

    constructor( 
         public _id:any,
         public train_name:string,
         public from:string ,
          public to:string,
          public fare:number,
          public arrival_time:string,
          public departure_time:string,
          public qty:number,
          public available:boolean) {
      
    }
}
