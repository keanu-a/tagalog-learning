const Lesson = require('../models/Lesson.js');

module.exports.getLesson = async (req, res) => {
  try {
    const { lessonTitle } = req.params;
    const foundLesson = await Lesson.findOne({ title: lessonTitle })
      .populate({
        path: 'questions.word',
        select: 'tagalog english',
      })
      .populate({
        path: 'questions.options',
        select: 'tagalog english',
      });
    // .populate('questions.options')

    res.status(200).json({ status: 'success', lesson: foundLesson });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
