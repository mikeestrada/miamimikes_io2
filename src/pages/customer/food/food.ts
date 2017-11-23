import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {PlanPage} from "../plan-calculator-form/plan/plan";
import {DashboardPage} from "../../progress/dashboard/dashboard";

@Component({
  selector: 'food',
  templateUrl: 'food.html'
})
export class FoodPage {

  constructor(public navCtrl: NavController) {
  }

  public navNext() {
    this.navCtrl.push(PlanPage);
  }

  public navToProgress() {
    this.navCtrl.setRoot(DashboardPage);
  }
}
