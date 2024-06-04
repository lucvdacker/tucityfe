import {CommonModule, NgOptimizedImage} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatchComponent } from "./components/match/match.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideAnimations} from "@angular/platform-browser/animations";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {CardComponent} from "./components/card/card.component";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {ChatComponent} from "./components/chat/chat.component";
import {SwipeComponent} from "./components/swipe/swipe.component";
import {MessageService} from "./service/message.service";
import {MessageComponent} from "./components/message/message.component";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {LoginComponent} from "./components/login/login.component";
import {MatCard} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    MatchComponent,
    UserProfileComponent,
    CardComponent,
    ChatComponent,
    SwipeComponent,
    MessageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgbAlertModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
  exports: [
    CardComponent,
    SwipeComponent
  ],
  providers: [provideAnimations()],
  // bootstrap: [AppComponent]
})
export class AppModule { }

