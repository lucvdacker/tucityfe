import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ChatComponent} from "./components/chat/chat.component";
import {SwipeComponent} from "./components/swipe/swipe.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent}
  // { path: 'match-overview', component: MatchOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
