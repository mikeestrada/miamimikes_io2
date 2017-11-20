import { NgModule } from '@angular/core';
import {AboutYou} from "./about-you/about-you";
import {IonicModule} from "ionic-angular/module";
import {GoalPage} from "./goal/goal";
import {PlanPage} from "./plan/plan";
import {FoodPage} from "./food/food";
import {SharedModule} from "../../shared/shared.module";
import {CalendarModule} from "ion2-calendar/dist/index";
import {FoodSelectPage} from "./food/food-select/food-select";

@NgModule({
  imports: [
    IonicModule.forRoot(AboutYou),
    SharedModule,
    CalendarModule
  ],
  declarations: [
    AboutYou,
    GoalPage,
    PlanPage,
    FoodPage,
    FoodSelectPage
  ],
  exports: [
    AboutYou,
    GoalPage,
    PlanPage,
    FoodPage,
    FoodSelectPage
  ],
  entryComponents: [AboutYou, GoalPage, PlanPage, FoodPage, FoodSelectPage]
})
export class CustomerModule {}
