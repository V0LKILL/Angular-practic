import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CardsComponent} from "./pages/cards/cards.component";
import {DepositsComponent} from "./pages/deposits/deposits.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'deposits', component: DepositsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


