import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    noteName: { type: String, required: true },
    className: {
      type: String,
      enum: ["9th", "10th", "1st Year", "2nd Year"],
    },
    subject: { type: String, required: true },
    medium: {
      type: String,
      enum: ["Urdu", "English"],
    },
    chapters: [],
  },
  { timestamps: true }
);

const NotesModel = mongoose.model("NotesModel", noteSchema);

export default NotesModel;
