import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit{

  @Input({required: true}) message: Message;

  ngOnInit(): void {
    console.log("hey")
  }
}
