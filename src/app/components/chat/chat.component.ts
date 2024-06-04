import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from "../../service/chat.service";
import {Message} from "../../models/message.model";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() conversationId: Number = 0;

  senderId: number = 1;
  newMessage: String = "";
  messages: Message[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.getAllMessagesInConversation(this.conversationId).subscribe(data => {
      this.messages = data;
    })
  }

  sendMessage() {
    const message: Message = {
      senderId: this.senderId,
      senderName: "Luc",
      body: this.encryptString(this.newMessage),
      dateSent: new Date(),
      receiverName: "Rik",
      receiverId: 2,
      conversationId: 1
    }
    this.chatService.sendMessage(message);
    this.newMessage = '';
  }

  encryptionKey: String = "z!!!!!!!1sdfadsf56adf456asdfasdf";

  encryptString(data: String): String {
    return CryptoJS.AES.encrypt(data, this.encryptionKey).toString();
  }

  decryptString(encryptedData: String): String {
    console.log(encryptedData);
    return CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
  }
}
