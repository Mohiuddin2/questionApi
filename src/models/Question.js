const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema..
const QuestionSchema = new Schema({

  description: String,
  alternatives: String,
  image: String,
  name: String,
 
});
// We've give the model the name Question.
module.exports = mongoose.model("Question", QuestionSchema);
// We made the necessary model and schema,
