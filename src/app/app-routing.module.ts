import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CardsComponent} from "./pages/cards/cards.component";
import {DepositsComponent} from "./pages/deposits/deposits.component";
import {BusinessComponent} from "./pages/business/business.component";
import {ServicesComponent} from "./pages/services/services.component";
import {AboutTheBankComponent} from "./pages/about-the-bank/about-the-bank.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'deposits', component: DepositsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutTheBankComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


