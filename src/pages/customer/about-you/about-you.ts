import {Component, Output, EventEmitter} from '@angular/core';
import {NavController} from "ionic-angular/index";
import {GoalPage} from "../goal/goal";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { OnInit } from '@angular/core';
import {AppConstants} from "../../../app/app.constants";

@Component({
  selector: 'about-you',
  templateUrl: 'about-you.html'
})
export class AboutYou implements OnInit {
  @Output() aboutFormComplete = new EventEmitter();
  public aboutForm: FormGroup;

  ngOnInit() {
    console.log(AppConstants.TEST);
  }
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.aboutForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])],
      email: ['', Validators.compose([Validators.required, CustomValidators.email])],
      birthday: ['', Validators.compose([Validators.required, CustomValidators.date])],
      heightFeet: ['', Validators.compose([Validators.pattern(AppConstants.NUMBERS_ONLY_REGEX),
        Validators.required])],
      heightInches: ['', Validators.required],
      gender: ['', Validators.required],

    });
  }

  public navNext() {
    this.aboutFormComplete.emit(this.aboutForm);
    this.navCtrl.push(GoalPage);
  }
}
