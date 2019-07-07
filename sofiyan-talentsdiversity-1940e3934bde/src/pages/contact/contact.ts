import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { EmailProvider } from '../../providers/email/email';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public form  : FormGroup;

  constructor(public navCtrl: NavController,
    private _ALERT       : AlertController,
    private _FORM	       : FormBuilder,
    private _EMAIL       : EmailProvider) {
      this.form = this._FORM.group({
        "to"            : ["sieditions13@gmail.com"],
        "subject"       : ["", Validators.required],
        "message"       : ["", Validators.required]
     });

  }
  
  displayMessage(title : string, subTitle : string) : void  {
    let alert : any 		=  this._ALERT.create({
        title 		: title,
        subTitle 	: subTitle,
        buttons    : ['Compris!']
    });
    alert.present();
  }

  sendMessage() : void {
      // Retrieve the validated form fields
      let to 		: string		= this.form.controls["to"].value,
          subject 	: string		= this.form.controls["subject"].value,
          message 	: string		= this.form.controls["message"].value;
      
      this._EMAIL.sendEmail(to, null, null, null, subject, message);
   }

}
