import {Student} from "./student.model";
import {Tutor} from "./tutor.model";

export interface Message{
  senderId: Number,
  senderName: string,
  receiverId: Number,
  receiverName: string,
  body: String,
  id?: Number
  dateSent?: Date;
  conversationId: Number
}

// private Long senderId;
// private String senderName;
// private String receiverName;
// private Long receiverId;
// private String message;
// private String dateSent;
