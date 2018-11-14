import { Component, OnInit } from '@angular/core';
import { Block } from '../Block';
import { BlockServiceService } from '../block-service.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  chain:Block[];
  transactions:Transaction[];
  constructor(private blockService:BlockServiceService) { }

  ngOnInit() {
    this.getMinedBlocks();
  }

  getMinedBlocks(){
    console.log("Start MINING");
    this.blockService.getMinedBlocks().subscribe(data=>{
      console.log(data["length"]);
      this.chain=data["chain"];
    });
  }

  initializeTransactions(t:Transaction[]){
    this.transactions=t;
  }
}
