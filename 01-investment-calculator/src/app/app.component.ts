import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentModel } from './user-input/investment.model';
import { InvestmetResultsComponent } from "./investmet-results/investmet-results.component";
import { InvestmentResults } from './investmet-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmetResultsComponent],
})
export class AppComponent {

  resultsData?: InvestmentResults[];
  
  onCalculateInvestmentResults(data: InvestmentModel) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
    return annualData;
  }
}
