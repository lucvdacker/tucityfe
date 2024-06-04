import {Component, OnInit} from '@angular/core';
import {Tutor} from "../../models/tutor.model";
import {MatchService} from "../../service/match.service";
import {Match} from "../../models/match.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  public tutors: Tutor[] = [];
  public index = 0;
  match: Match | undefined;
  userId: Number  = 1;
  constructor(private userService: UserService, private matchService: MatchService) {
  }

  ngOnInit(): void {
    this.userService.getAllTutors().subscribe((data) =>{
      this.tutors = data;
    })
    console.log(this.tutors)
  }

  like(tutor: Tutor) {
    this.match = {
      matchedSince: new Date(),
      studentId: this.userId,
      tutorId: tutor.id
    }
    console.log("hey rick");
    this.matchService.postMatch(this.match);
    this.updateIndex();
  }

  dislike() {
    this.updateIndex();
  }

  updateIndex() {
    if (this.index < this.tutors.length) {
      this.index++;
    }
    else {

    }
  }

  calculateAge(dateOfBirth: Date): number {
    const today: Date = new Date();
    const dob: Date = new Date(dateOfBirth);

    let age: number = today.getFullYear() - dob.getFullYear();
    const monthDiff: number = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }
}
