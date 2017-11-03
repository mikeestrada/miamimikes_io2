import { NgModule } from '@angular/core';
import {AboutYou} from "./about-you/about-you";
import {IonicModule} from "ionic-angular/module";
import {ReservePage} from "./reserve/reserve";
import {ConfirmReservationPage} from "./confirm-reservation/confirm-reservation";
import {SharedModule} from "../../shared/shared.module";
import {VenueGridPage} from "./venue-grid/venue-grid";
import {VenueListPage} from "./venue-list/venue-list";
@NgModule({
  imports: [
    IonicModule.forRoot(ReservePage),
    SharedModule
  ],
  declarations: [
    AboutYou,
    ReservePage,
    ConfirmReservationPage,
    VenueListPage,
    VenueGridPage
  ],
  exports: [
    AboutYou,
    ReservePage,
    VenueListPage,
    VenueGridPage
  ],
  entryComponents: [AboutYou, ConfirmReservationPage]
})
export class CustomerModule {}
