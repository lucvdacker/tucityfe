import { Student } from "./student.model";
import { Tutor } from "./tutor.model";

export interface Match {
  id?: Number,
  studentId: Number,
  studentName?: String,
  tutorId: Number,
  tutorName?: String,
  matchedSince: Date,
}
