import {Injectable, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Message} from "../models/message.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService{

  baseURL: string = "http://localhost:8081"

  constructor(private http: HttpClient) {
  }

  sendMessage(message: Message)  {
    console.log(message)
    return this.http.post(this.baseURL, message)
  }

  getAllMessagesInConversation(conversationId: Number):Observable<Message[]>{
    return this.http.get<Message[]>(this.baseURL + "/message/conversation/" + 1)
  }
}
