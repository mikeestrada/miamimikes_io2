import {Component, Output, EventEmitter} from '@angular/core';
import {NavController} from "ionic-angular/index";
import {GoalPage} from "../goal/goal";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'about-you',
  templateUrl: 'about-you.html'
})
export class AboutYou {
  @Output() aboutFormComplete = new EventEmitter();
  public aboutForm : FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.aboutForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])],
      email: ['', Validators.compose([Validators.required, CustomValidators.email])],
      birthday: ['', Validators.compose([Validators.required, CustomValidators.date])],
      heightFeet: ['', Validators.compose([Validators.pattern('[^\d+$]*'), Validators.required])],
      heightInches: ['', Validators.required],
      gender: ['', Validators.required],

    });
  }

  public navNext() {
    console.log(this.aboutForm);
    console.log(this.aboutForm.value);
    console.log(this.aboutForm.valid);
    this.aboutFormComplete.emit(this.aboutForm);
    this.navCtrl.push(GoalPage);
  }

}
