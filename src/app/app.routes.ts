import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {ChatComponent} from "./components/chat/chat.component";

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent}
  // { path: 'match-overview', component: MatchOverviewComponent }
];
