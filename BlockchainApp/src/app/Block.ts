import { Transaction } from "./Transaction";

export class Block{
    index:String;
    timestamp:String;
    transactions:Transaction[];
    proof:String;
    previous_hash:String;
}