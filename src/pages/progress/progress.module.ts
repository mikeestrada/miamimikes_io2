import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {IonicModule} from "ionic-angular/module";
import {DashboardPage} from "./dashboard/dashboard";

@NgModule({
  imports: [
    IonicModule.forRoot(DashboardPage),
    SharedModule
  ],
  declarations: [
    DashboardPage
  ],
  exports: [
    DashboardPage
  ],
  entryComponents: [ DashboardPage ]
})
export class ProgressModule {}
