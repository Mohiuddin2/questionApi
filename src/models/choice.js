const mongoose = require("mongoose");
const { Schema } = mongoose;

const choicetype = { type: String, required: trure };

const choiceSchema = new Schema({
  choice1: choicetype,
  choice2: choicetype,
  choice3: choicetype,
  choice4: choicetype,
  question: { type: Schema.Types.ObjectId, ref: "Question" },
});

// We've give the model the name Choice.
const Choice = mongoose.model("Choice", choiceSchema);
module.exports = Choice;
