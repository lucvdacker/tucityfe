import {Component} from "@angular/core";
import {LoginService} from "../../service/login.service";
import {LoginReqModel} from "../../models/loginReq.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginReq: LoginReqModel = {
    email: "",
    password: ""
  };

  responseBody: any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService) {
  }

  login() {
    // CALL API with username and password
    if (!this.loginForm.invalid) {
      this.loginReq.email = this.loginForm.value.email.toString();
      this.loginReq.password = this.loginForm.value.password.toString();
      this.loginService.login(this.loginReq);
    }
  }
}
