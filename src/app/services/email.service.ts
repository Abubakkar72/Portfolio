import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(templateId: string, data: any): Promise<EmailJSResponseStatus> {
    return emailjs.send('service_vmw60rp', templateId, data, 'RY5ZhjaJtO1biEtsL');
  }
}
