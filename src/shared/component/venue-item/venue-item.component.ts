import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Venue} from "../../model/venue.model";

@Component({
  selector: 'venue-item',
  templateUrl: 'venue-item.component.html'
})
export class VenueItemComponent {

  @Input() venue: Venue;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  public navToVenueDetail() {
  }
}
