export class PaymentModel {

    constructor( 
        public passengerID:any,
        public trainID:any,
        bookedDate:string,
        paymentDone:boolean,
        train_name:string,
        from:string,
        to:string,
        fare:number
        ) {
     
   }
}
