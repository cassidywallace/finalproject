import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit(){
    this.loginInvalid = false;
    this.formSubmitAttempt = false;

    if (this.form.valid){
      try{
        await this.authenticationService.login(this.form.value);

      }
      catch (error){
        this.loginInvalid = true;
      }
    }
    else {
      this.formSubmitAttempt = true;

    }
  }

}
