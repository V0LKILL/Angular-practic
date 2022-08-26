import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/parts-sites/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardsComponent,
    DepositsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
