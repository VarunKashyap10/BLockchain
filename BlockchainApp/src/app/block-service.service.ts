import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './Transaction';
import { Block } from './Block';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class BlockServiceService {
  url:String="/";
  constructor(private http:HttpClient, private router:RouterModule) { }

  sendTransaction(transaction:Transaction){
    console.log(transaction);
    return this.http.post<Transaction>("/transactions/new",transaction);
  }

  getMinedBlocks(){
    console.log("Getting Mined BLocks");
    return this.http.get("/chain");
  }

  mineBlock(){
    console.log("Mining");
    return this.http.get("/mine");
  }


}
