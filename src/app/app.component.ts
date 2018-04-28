import {Component} from '@angular/core';
import {Email} from './_models/email';
import {EmailService} from './_services/email.service';
import {FlashService} from './_services/flash.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modelEmail = new Email('', '', '');
  public edited = false;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  name: FormControl;
  email: FormControl;
  message: FormControl;

  // composeOptions: email.ComposeOptions

  constructor(private emailService: EmailService, private flash: FlashService) {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.message = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }


  sendEmail() {
    console.log(this.modelEmail);
    if (this.myform.valid) {
      this.emailService.createMail(this.modelEmail.customerName, this.modelEmail.customerEmail,
        this.modelEmail.emailMessage).subscribe(data => {
          this.flash.success('Bericht is verstuurd!');
          this.myform.reset();
          this.openDetails();
        },
        error => {
          console.log(error.error);
        });
    } else {
      this.flash.error('Niet alles is correct ingevuld!');
    }
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
      this.myform.reset();
    }
  }

  openDetails() {
    if (this.edited) {
      this.edited = false;
    } else {
      this.edited = true;
    }
  }
}
