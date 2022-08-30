import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeRateService} from "../../../http/currency-exchange-rate/currency-exchange-rate.service";
import {CurrencyRateInterface} from "../../../interfaces/currency-rate-interface.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currencyRates: CurrencyRateInterface[] = [];

  constructor(private currencyExchangeRateService: CurrencyExchangeRateService) { }

  public ngOnInit(): void {
    this.currencyExchangeRateService.getRates()
      .subscribe((response: CurrencyRateInterface[]) => {
        this.currencyRates = response;
      })

  }

}
