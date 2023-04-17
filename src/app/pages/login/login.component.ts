import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupModel } from 'src/app/models/signup.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {

  }
  emailId: any;
  password: any;

  profileForm = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm)

    this.emailId = this.profileForm.controls.EmailId.value;
    this.password = this.profileForm.controls.Password.value;
    this.loginService.loginUser(this.emailId, this.password).subscribe((data: any) => {
      console.log('Data Saved')
    }, (err: any) => {
      console.log('Error Occured');
      console.log(err)
    })
  }
}

