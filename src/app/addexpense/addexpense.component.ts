import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss']
})
export class AddexpenseComponent implements OnInit {
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
    const request = this.server.request('POST', '/expenses', {
      title: this.form.get('title').value,
      budget: this.form.get('budget').value
    });

    request.subscribe(()=> {
      window.location.reload()
    })

  }

delete(){
    if(!this.form.valid){
      return;
}

const request = this.server.request('DELETE', '/expenses',{
  title: this.form.get('title').value,
  budget: this.form.get('budget').value
});

request.subscribe(() => {
  window.location.reload()
})

}

update(){
  if(!this.form.valid){
    return;
}

const request = this.server.request('PUT', '/expenses',{
title: this.form.get('title').value,
budget: this.form.get('budget').value
});

request.subscribe(() => {
window.location.reload()
})

}


}
