import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Match} from "../models/match.model";

@Injectable({
  providedIn: "root"
})
export class MatchService{

  baseUrl: string = "http://localhost:8080/match/match/"

  constructor(private http: HttpClient) {}


  postMatch(match: Match) {
    return this.http.post(this.baseUrl, match)
  }

  getMatchesByStudentId(id: Number): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl + "student/" + id)
  }
}
