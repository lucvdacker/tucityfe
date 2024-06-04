import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginReqModel} from "../models/loginReq.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  baseURL: string = "authserver-service.default.svc.cluster.local:8080"

  constructor(private http: HttpClient) {
  }

  login(loginReq: LoginReqModel){
    var request = this.http.post(this.baseURL + "/rest/auth/login", loginReq, {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin' : '*'
      })})
    console.log(request);
  }
}
