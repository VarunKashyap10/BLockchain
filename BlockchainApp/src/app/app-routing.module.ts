import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { MineComponent } from './mine/mine.component';

const routes: Routes = [
  {path:'',redirectTo:'newTransaction',pathMatch:'full'},
  {path:'newTransaction',component:TransactionComponent},
  {path:'viewChain',component:MineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
