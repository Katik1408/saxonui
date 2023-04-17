import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private loginService: LoginService) {

  }

  profileForm = new FormGroup({
    CustomerName: new FormControl(''),
    EmailId: new FormControl(''),
    Password: new FormControl(''),
    Location: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm)    
    this.loginService.signupuser(this.profileForm.value).subscribe((data: any) => {
      console.log('Data Saved')
    }, (err: any) => {
      console.log('Error Occured');
      console.log(err)
    })
  }
}
