import { NgModule } from '@angular/core';
import {CheckoutPage} from "./checkout";
import {IonicModule} from "ionic-angular/module";

@NgModule({
  imports: [ IonicModule.forRoot(CheckoutPage) ],
  declarations: [ CheckoutPage ],
  exports: [ CheckoutPage ],
  entryComponents: [ CheckoutPage ]
})
export class CheckoutModule {}
