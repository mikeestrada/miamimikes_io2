import { NgModule } from '@angular/core';
import {AboutYou} from "./about-you/about-you";
import {IonicModule} from "ionic-angular/module";
import {GoalPage} from "./goal/goal";
import {PlanPage} from "./plan/plan";
import {FoodPage} from "./food/food";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    IonicModule.forRoot(AboutYou),
    SharedModule
  ],
  declarations: [
    AboutYou,
    GoalPage,
    PlanPage,
    FoodPage
  ],
  exports: [
    AboutYou,
    GoalPage,
    PlanPage,
    FoodPage
  ],
  entryComponents: [AboutYou, GoalPage, PlanPage, FoodPage]
})
export class CustomerModule {}
