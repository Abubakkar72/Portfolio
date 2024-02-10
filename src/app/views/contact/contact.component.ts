import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  myForm!: FormGroup;

  // public sendEmail(e: Event) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_vmw60rp','template_ok2vn0i', e.target as HTMLFormElement, {
  //       publicKey: 'RY5ZhjaJtO1biEtsL',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', (error as EmailJSResponseStatus).text);
  //       },
  //     );
  // }
  constructor(private emailService: EmailService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      number: [''],
      message: [''],

    });
  }
  



  sendEmail() {
    const firstName = this.myForm.get('firstname')?.value;
      const lastName = this.myForm.get('lastname')?.value;
      const email = this.myForm.get('email')?.value;
      const number = this.myForm.get('number')?.value;
      const message = this.myForm.get('message')?.value;

      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(number);
      console.log(message);



    const templateId = 'template_ok2vn0i';
    const emailData = {
      to_name: 'Abubakkar',
      from_name: `${firstName} ${lastName}`,
      email: `${email}`,
      mob_number: `${number}`,
      message: `${message}`
    };

    this.emailService.sendEmail(templateId, emailData)
      .then((response) => {
        console.log('Email sent successfully', response);
      }, (error) => {
        console.error('Email sending failed', error);
      });

      
     
  }

}
