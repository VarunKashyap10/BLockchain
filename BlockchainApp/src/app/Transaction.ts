export class Transaction{
    sender:String;
    recipient:String;
    amount:number;
    constructor(    sender:String,
        recipient:String,
        amount:number){
            this.sender=sender;
            this.recipient=recipient;
            this.amount=amount;
        }
}