import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";

@Component({
  selector: 'food-select',
  templateUrl: 'food-select.html'
})
export class FoodSelectPage {

  //@Input() selectionStructure: string = '';

  constructor(public navCtrl: NavController) {
  }
}
