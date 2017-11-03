import {Component} from '@angular/core';
import {NavController} from "ionic-angular/index";

@Component({
  selector: 'checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  constructor(public navCtrl: NavController) {
  }

  public navToReceipt() {
    //this.navCtrl.push(ConfirmReservationPage);
  }
}
