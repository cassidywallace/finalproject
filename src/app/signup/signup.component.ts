import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private server: ServerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    },);
  }

  onSubmit(){
    console.log('submitting');
    if(!this.form.valid){
      console.log('Form not valid. Please check that fields are correctly filled in');
      return;
    }

    console.log('form valid');
    const request = this.server.request('POST', '/user/signup', {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    });

    request.subscribe(()=> {
      this.router.navigate(['/']);
    })
  }

}
