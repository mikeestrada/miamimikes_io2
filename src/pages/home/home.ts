import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutYou} from "../customer/about-you/about-you";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  states = [];
  constructor(public navCtrl: NavController) {
  }

  public navigateToAboutYou() {
    this.navCtrl.setRoot(AboutYou);
  }
  public navigate(component: string) {
    this.navCtrl.push(component);
  }
}
