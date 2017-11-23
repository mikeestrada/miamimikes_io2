import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlanCalculatorComponent} from "../customer/plan-calculator-form/plan-calculator-form.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  states = [];
  constructor(public navCtrl: NavController) {
  }

  public navNext(): void {
    this.navCtrl.setRoot(PlanCalculatorComponent);
  }
}
