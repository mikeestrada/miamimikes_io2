import { Component, Input } from '@angular/core';
import {AppConstants} from "../../../app/app.constants";
import {FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'plan-form',
  templateUrl: 'plan-calculator-form.component.html'
})
export class PlanCalculatorComponent {
  @Input()
  aboutForm: FormGroup;
  @Input()
  goalForm: FormGroup;

  planForm: FormGroup;
  pageIndex: string = AppConstants.ABOUT;

  constructor(private formBuilder: FormBuilder ) {
    this.planForm = this.formBuilder.group({
      aboutForm: this.aboutForm,
      goalForm: this.goalForm
    });
  }
}
