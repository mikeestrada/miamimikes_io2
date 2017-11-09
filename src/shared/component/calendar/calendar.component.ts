import { Component } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent{
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  constructor() { }

  onChange($event) {
    console.log($event);
  }
}
