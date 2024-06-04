import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tutor} from "../models/tutor.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8080/match/"

  constructor(private http: HttpClient) {}

  getAllTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.baseUrl + "user/tutors")
  }
}
