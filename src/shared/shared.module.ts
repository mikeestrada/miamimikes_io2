import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {CalendarComponent} from "./component/calendar/calendar.component";
import {CalendarModule} from "ion2-calendar/dist/index";

@NgModule({
  imports: [
    CalendarModule
  ],
  declarations: [
    CalendarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    CalendarComponent
  ]
})
export class SharedModule {}
