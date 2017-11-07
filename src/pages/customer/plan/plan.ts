import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {FoodPage} from "../food/food";

@Component({
  selector: 'plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  constructor(public navCtrl: NavController) {
  }

  public navNext() {
    this.navCtrl.push(FoodPage);
  }
}
