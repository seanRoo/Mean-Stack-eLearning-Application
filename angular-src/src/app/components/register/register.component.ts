import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgModule } from '@angular/core';
import {NgZone} from '@angular/core';

@NgModule({
   imports: [
   FlashMessagesModule.forRoot()
   ]
 })
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  value: String;
	first: String;
  last: String;
	email: String;
  role: String;
	password: String;
  university: String;
  error = false;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
    ) {}

  ngOnInit() {
  }

onRegisterSubmit(){
  console.log(this.value);

  const user={
    first: this.first,
    last: this.last,
    email: this.email,
    password: this.password,
    university: this.university


  }
  //Required Fields
  if(!this.validateService.validateRegister(user)){
    this.flashMessage.show("Fill in all fields", {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  //Validate Email
  if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show("Valid email required", {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  //Register User
  if(this.value == 'student'){
  this.authService.registerUser(user).subscribe(
        suc => {
            this.flashMessage.show("Registration Successful", {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/login']);
        },
        err => {
            //this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger', timeout: 3000});
            this.error = true;
            this.router.navigate(['/register']);
            console.log(err );
        }
    );
}
else if(this.value == 'teacher'){
  this.authService.registerTeacher(user).subscribe(
        suc => {
            this.flashMessage.show("Registration Successful", {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/login']);
        },
        err => {
            this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/register']);
            console.log(err );
        }
    );
}

}
  onSelectionChange(event){
    this.value = event.value;
  }

  onClick(){
    this.error = false;
  }
}
