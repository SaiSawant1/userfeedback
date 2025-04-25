import { db } from "../db/db.js";

export const createFeedback = async (req, res) => {
  try {
    const { userName, email, feedback, category } = req.body;

    if (!userName || !email || !feedback || !category) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: userName, email, feedback, and category are required",
      });
    }

    const validCategories = ["suggestion", "bug", "feature"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category. Must be one of: suggestion, bug, feature",
      });
    }

    const newFeedback = await db.feedback.create({
      data: {
        userName,
        email,
        feedback,
        category,
      },
    });

    return res.status(201).json({
      data: newFeedback,
    });
  } catch (error) {
    console.error("Error creating feedback:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating feedback",
    });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await db.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      data: feedbacks,
    });
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching feedbacks",
    });
  }
};
