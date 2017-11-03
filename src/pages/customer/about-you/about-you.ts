import {Component} from '@angular/core';
import {NavController} from "ionic-angular/index";
import {ConfirmReservationPage} from "../confirm-reservation/confirm-reservation";

@Component({
  selector: 'about-you',
  templateUrl: 'about-you.html'
})
export class AboutYou {

  constructor(public navCtrl: NavController) {
  }

  public navToConfirm() {
    this.navCtrl.push(ConfirmReservationPage);
  }
}
