import { Component, OnInit } from '@angular/core';
import { BlockServiceService } from '../block-service.service';
import { Transaction } from '../Transaction';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:Transaction;
  constructor(private blockService:BlockServiceService) { }

  ngOnInit() {
    this.transaction={sender:"Varun",recipient:"Kashyap",amount:1234};
  }

  createNewTransaction():void{
    console.log(this.transaction);
    this.blockService.sendTransaction(this.transaction).subscribe(data=>{
      alert( JSON.stringify(data) );
    });
  }


  mineBlock(){
    console.log("Mining Block");
    this.blockService.mineBlock().subscribe(data=>{
      alert(JSON.stringify(data));
    });
  }


}
