import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      text: {
        type: String,
        required: true,
      },
      correct: {
        type: Boolean,
        required: true,
      },
    },
  ],
  explanation: {
    type: String,
    required: true,
  },
});

const newQuizeQuestion = mongoose.model("quize_questions", questionSchema);
export default newQuizeQuestion;
