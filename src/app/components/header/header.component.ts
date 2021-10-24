import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public links: Array<any> = [
    {
      name: 'Soporte'
    },
    {
      name: 'Accesorios'
    },
    {
      name: 'Ayuda'
    }
  ]

  public currencies: Array<any> = []

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrencies()
  }

  setCurrency(symbol: string, value: number): void {
    this.currencyService.setCurrency(symbol, value)
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(({ rates }) => {

      this.currencies = Object.values(rates).map((value: any, index: number) => {
        return {
          symbol: Object.keys(rates)[index],
          value
        }
      })
    })
  }

}
