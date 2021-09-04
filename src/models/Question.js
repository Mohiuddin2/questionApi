const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema..
const QuestionSchema = new Schema({
  q_heading: {
    type: String,
    required: [true, "Question Must HaveQuestion "],
  },
  choice: [{ type: Schema.Types.ObjectId, ref: "Choice" }],
});

// We've give the model the name Question.
const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;

