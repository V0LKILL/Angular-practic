import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/parts-sites/header/header.component';
import { FooterComponent} from "./components/parts-sites/footer/footer.component";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {CurrencyExchangeRateService} from "./http/currency-exchange-rate/currency-exchange-rate.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardsComponent,
    DepositsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ru',
      loader: {
        provide: TranslateLoader,

        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CurrencyExchangeRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
