import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-registration',
  templateUrl: './binding-registration.component.html',
  styleUrls: ['./binding-registration.component.css']
})
export class BindingRegistrationComponent {
  public User = {
    name: '',
    email: '',
    password: '',
    bio: '',
    designation: '',
    terms: false
  };
  public submitRegister()
    {
      console.log(this.User);
      
    }
}
