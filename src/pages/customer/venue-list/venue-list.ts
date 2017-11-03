import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Venue} from "../../../shared/model/venue.model";

@Component({
  selector: 'venue-list',
  templateUrl: 'venue-list.html'
})
export class VenueListPage {
  selectedItem: any;
  venues: Venue[] = [
      new Venue('Moose Bar', '123 main', '/assets/imgs/eur_club.jpg',
        'www.miamimikesmealprep.com', 5),
    new Venue('Eagle Bar', '123 main', '/assets/imgs/bar.jpg',
      'www.miamimikesmealprep.com', 3),
    new Venue('Nikko Bar', '123 main', '/assets/imgs/belv_club.jpg',
      'www.miamimikesmealprep.com', 4),
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }



  public navToVenue(index) {
    this.navCtrl.push(typeof this.venues[index], {'venue': this.venues[index]});
  }
}
