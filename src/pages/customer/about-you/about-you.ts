import {Component} from '@angular/core';
import {NavController} from "ionic-angular/index";
import {GoalPage} from "../goal/goal";

@Component({
  selector: 'about-you',
  templateUrl: 'about-you.html'
})
export class AboutYou {

  constructor(public navCtrl: NavController) {
  }

  public navNext() {
    this.navCtrl.push(GoalPage);
  }
}
