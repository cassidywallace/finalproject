import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';

@Component({
  selector: 'app-addbudgetform',
  templateUrl: './addbudgetform.component.html',
  styleUrls: ['./addbudgetform.component.scss']
})
export class AddbudgetformComponent  {

  constructor() { }
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Budget (18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic () {return JSON.stringify(this.model); }

  newHero() {
    this.model = new Budget(42, '', '');
  }

  skyDog(): Budget {
    const myHero =  new Budget (42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }
}
