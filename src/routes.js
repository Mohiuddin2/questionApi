const express = require("express");
const router = express.Router();
// const cors = require('cors')
const Question = require("./models/Question"); // it includes our model
const methodOverride = require("method-override"); //npm i method-override and require it

router.use(methodOverride("_method")); // middle ware override with POST having ?_method=DELETE
router.use(express.urlencoded({ extended: true })); // this app.post to submin route

// get all quiz questions
router.get("/questions", (req, res) => {});

router.get("/questions/:id", async (req, res) => {
  const { id } = req.params;
  const question = await Question.findById(id);
  res.render("show", { question });
});

router.get("/create-question", (req, res) => {
  res.render("create_new.ejs");
});


// Creating Choice route
router.get("/", (req, res) => {
  res.render("./question/q_head");
});

router.post("/questions", async (req, res) => {
  try {
    const { description } = req.body;
    const { choice } = req.body;
    //    const { alternatives } = req.body;
    // const { image } = req.body;
    // const { name } = req.body;

    const question = await Question.create({
      description,
      choice,
      // alternatives,
      // image,
      // name,
    });
    res.redirect(`/questions/${question._id}`);
    console.log(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});






















// Get Route for Updating
router.get("/questions/:id/edit", async (req, res) => {
  const { id } = req.params;
  const question = await Question.findById(id);
  res.render("edit", { question });
});
















// update one quiz question
router.put("/question/:id", async (req, res) => {
  const { id } = req.params;
  const newQuestion = await Question.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/questions/${newQuestion._id}`);
});

// for Delete
router.delete("/question/:id", async (req, res) => {
  const { id } = req.params;
  const deleteQuestion = await Question.findByIdAndDelete(id);
  res.send("/questions");
});
router.ge;

module.exports = router;
