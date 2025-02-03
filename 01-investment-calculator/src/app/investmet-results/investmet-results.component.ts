import { Component, Input } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investmet-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investmet-results.component.html',
  styleUrl: './investmet-results.component.css'
})
export class InvestmetResultsComponent {

  @Input() results?: InvestmentResults[];
}
