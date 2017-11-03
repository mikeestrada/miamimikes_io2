import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {VenueItemComponent} from "./component/venue-item/venue-item.component";

@NgModule({
  imports: [],
  declarations: [
    VenueItemComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    VenueItemComponent
  ]
})
export class SharedModule {}
