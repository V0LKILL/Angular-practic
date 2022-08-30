import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyRateInterface} from "../../interfaces/currency-rate-interface.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeRateService {
  constructor(private http: HttpClient) { }

  public getRates(): Observable<any> {
    return this.http.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
  }
}





