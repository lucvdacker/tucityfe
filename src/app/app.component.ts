import { Component } from '@angular/core';
import {Subject} from "rxjs";
import {ActivatedRoute, provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, AppModule, CommonModule, RouterLinkActive],
  templateUrl: "./app.component.html",
})
export class AppComponent {

}
