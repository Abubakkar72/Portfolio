import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      name: [''],
    });
  }

  navigateToDestination() {
    // Handle form submission logic here
    this.onSubmit();
  
    // Navigate to the destination route
    this.router.navigateByUrl('/home');
  }
  
  onSubmit() {
    // Store form values in session storage
    sessionStorage.setItem('formData', JSON.stringify(this.myForm.value));
    console.log(this.myForm.value);
  }



}
