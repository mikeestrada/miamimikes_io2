import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {CheckoutPage} from "../../checkout/checkout";

@Component({
  selector: 'confirm-reservation',
  templateUrl: 'confirm-reservation.html'
})
export class ConfirmReservationPage {

  constructor(public navCtrl: NavController) {
  }

  public navToCheckout() {
    this.navCtrl.setRoot(CheckoutPage);
  }
}
