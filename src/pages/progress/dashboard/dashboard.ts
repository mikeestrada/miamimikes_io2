import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {
  }

  public navNext() {
    //this.navCtrl.push(FoodPage);
  }
}
