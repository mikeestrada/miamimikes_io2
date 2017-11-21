import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {PlanPage} from "../plan/plan";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AppConstants} from "../../../app/app.constants";

@Component({
  selector: 'goal',
  templateUrl: 'goal.html'
})
export class GoalPage {
  public goalForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.goalForm = this.formBuilder.group({
      goalDirection: ['', Validators.required],
      goalWeight: ['', Validators.compose([Validators.pattern(AppConstants.NUMBERS_ONLY_REGEX),
        Validators.required])],
      goalDate: ['', Validators.required]
    });
  }

  public navNext() {
    console.log(this.goalForm.value);
    this.navCtrl.push(PlanPage);
  }
}
