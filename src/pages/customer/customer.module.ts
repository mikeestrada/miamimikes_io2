import { NgModule } from '@angular/core';
import {IonicModule} from "ionic-angular/module";
import {FoodPage} from "./food/food";
import {SharedModule} from "../../shared/shared.module";
import {CalendarModule} from "ion2-calendar/dist/index";
import {FoodSelectPage} from "./food/food-select/food-select";
import {PlanCalculatorComponent} from "./plan-calculator-form/plan-calculator-form.component";
import {AboutYouPage} from "./plan-calculator-form/about-you/about-you";
import {GoalPage} from "./plan-calculator-form/goal/goal";
import {PlanPage} from "./plan-calculator-form/plan/plan";

@NgModule({
  imports: [
    IonicModule.forRoot(AboutYouPage),
    SharedModule,
    CalendarModule
  ],
  declarations: [
    AboutYouPage,
    GoalPage,
    PlanPage,
    FoodPage,
    FoodSelectPage,
    PlanCalculatorComponent
  ],
  exports: [
    AboutYouPage,
    GoalPage,
    PlanPage,
    FoodPage,
    FoodSelectPage
  ],
  entryComponents: [PlanCalculatorComponent, GoalPage]
})
export class CustomerModule {}
