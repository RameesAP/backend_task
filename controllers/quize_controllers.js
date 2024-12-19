import newQuizeQuestion from "../models/quize_model.js";

export const test = (req, res) => {
  res.json({ message: "API ROUTE IS WORKING Hello World" });
};

export const questionAdd = async (req, res) => {
  try {
    const { question, options, explanation } = req.body;

    if (!question || !options || !explanation) {
      return res.status(400).json({
        message: "All fields are required: text, options, explanation.",
      });
    }

    // Create a new question instance
    const newQuestion = new newQuizeQuestion({
      question,
      options,
      explanation,
    });

    const savedQuestion = await newQuestion.save();

    // Send success response
    res.status(201).json({
      message: "Question added successfully",
      data: savedQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add question",
      error: error.message,
    });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await newQuizeQuestion.find();
    res.status(200).json({
      message: "Questions fetched successfully",
      data: questions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
};
