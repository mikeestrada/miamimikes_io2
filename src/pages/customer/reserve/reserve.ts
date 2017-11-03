import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {AboutYou} from "../about-you/about-you";

@Component({
  selector: 'reserve',
  templateUrl: 'reserve.html'
})
export class ReservePage {

  constructor(public navCtrl: NavController) {
  }

  public navToAbout() {
    this.navCtrl.push(AboutYou);
  }
}
