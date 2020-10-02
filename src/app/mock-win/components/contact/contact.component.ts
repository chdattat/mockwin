import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }

  submitContactForm() {
    if (this.contactForm.valid) {
    }
  }
}
