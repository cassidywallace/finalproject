import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbudget',
  templateUrl: './addbudget.component.html',
  styleUrls: ['./addbudget.component.scss']
})
export class AddbudgetComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private server: ServerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title:[''],
      budget: ['']
    },);
  }

  onSubmit(){
    console.log('submitting');
    if(!this.form.valid){
      console.log('Form not valid. Please check that fields are correctly filled in');
      return;
    }

    console.log('form valid');
    const request = this.server.request('POST', '/budget', {
      title: this.form.get('title').value,
      budget: this.form.get('budget').value
    });

    request.subscribe(()=> {
      this.router.navigate(['/dashboard']);
    })
  }

  delete(){
    if(!this.form.valid){
      return;
}

const request = this.server.request('DELETE', '/budget',{
  title: this.form.get('title').value,
  budget: this.form.get('budget').value
});

request.subscribe(()=> {
  this.router.navigate(['/dashboard']);
})

}

update(){
  if(!this.form.valid){
    return;
}

const request = this.server.request('PUT', '/budget',{
title: this.form.get('title').value,
budget: this.form.get('budget').value
});

request.subscribe(()=> {
  this.router.navigate(['/dashboard']);
})

}

}
