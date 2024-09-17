import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from './../services/calculation.service';

@Component({
  selector: 'app-freelance-calculator',
  templateUrl: 'freelance-calculator.component.html',
  styleUrls: ['freelance-calculator.component.scss']
})
export class FreelanceCalculatorComponent implements OnInit {
  calculatorForm: FormGroup = 0 as any;
  result: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.calculatorForm = this.formBuilder.group({
      expectedSalary: ['', [Validators.required, Validators.min(0)]],
      freeDaysPerYear: ['', [Validators.required, Validators.min(0)]],
      sickDaysPerYear: ['', [Validators.required, Validators.min(0)]],
      meetingsPercentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      monthlyFixedExpenses: ['', [Validators.required, Validators.min(0)]],
      desiredBenefitPercentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  calculateRate() {
    if (this.calculatorForm.valid) {
      this.result = this.calculationService.calculateHourlyRate(this.calculatorForm.value);
    }
  }
}
