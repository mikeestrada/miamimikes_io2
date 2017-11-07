import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {PlanPage} from "../plan/plan";

@Component({
  selector: 'goal',
  templateUrl: 'goal.html'
})
export class GoalPage {

  constructor(public navCtrl: NavController) {
  }

  public navNext() {
    this.navCtrl.push(PlanPage);
  }
}
