import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {FoodPage} from "../food/food";

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
