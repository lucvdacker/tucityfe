import {Component, OnInit} from '@angular/core';
import {Match} from "../../models/match.model";
import {MatchService} from "../../service/match.service";

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrl: './match-overview.component.css'
})
export class MatchOverviewComponent implements OnInit{

  matches: Match[] = [];

  id: Number = 1;

  constructor(private matchService: MatchService) {
  }

  ngOnInit(): void {
    this.matchService.getMatchesByStudentId(this.id).subscribe((data) =>{
      this.matches = data;
    })
  }

}
