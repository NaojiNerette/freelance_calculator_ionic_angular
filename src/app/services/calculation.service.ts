import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculateHourlyRate(data: any): number {
    const workingDaysPerYear = 365 - data.freeDaysPerYear - data.sickDaysPerYear - 104; // 104 are weekends
    const workingHoursPerYear = workingDaysPerYear * 8;
    const effectiveWorkingHours = workingHoursPerYear * (1 - data.meetingsPercentage / 100);

    const annualExpenses = data.monthlyFixedExpenses * 12;
    const totalAnnualCost = data.expectedSalary + annualExpenses;

    const desiredAnnualIncome = totalAnnualCost / (1 - data.desiredBenefitPercentage / 100);

    return desiredAnnualIncome / effectiveWorkingHours;
  }
}
