import { Component } from '@angular/core';
import { FoodPage } from "../../food/food";
import { NavController } from "ionic-angular/index";

@Component({
  selector: 'plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  date: string;
  type: 'string';

  constructor(public navCtrl: NavController) {
  }

  public navNext() {
    this.navCtrl.push(FoodPage);
  }

  public onChange($event) {
    console.log($event);
  }
}
