import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';
import { UserVO } from 'src/app/vo/user-vo';

import { AuthenticationService } from './../../services/mock/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: '';
  password:'';
  usernameError = '';
  passwordError = '';
  loginError = ''

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userModel: UserModel
  ) { }

  ngOnInit(): void {
  }

  onReset():void{
    this.username ='';
    this.password = '';
  }

  onLogin():void {
    let errorFound: boolean = false;
    this.loginError = '';
    if(this.username===''){
      this.usernameError = 'You must Enter a Username';
      errorFound = true;
    }else{
      this.usernameError='';
    }
    if ( this.password === '') {
      this.passwordError = 'You Must Enter a Password';
      errorFound = true;
    } else {
      this.passwordError = '';
    }
    if (errorFound === true) {
      return;
    }

    this.authenticationService.authenticate(
      this.username, this.password).subscribe(
        result => {
          //result code
          if ( result.error) {
            this.loginError = 'We could not log you in';
            return;
          }
          this.userModel.user = result.resultObject as UserVO;
          this.router.navigate(['/tasks']);
        }, error => {
          //error code
          this.loginError = 'There was an authentication service error';
        }
      )
    
  }

}
