const Lesson = require('../models/Lesson.js');

module.exports.getLesson = async (req, res) => {
  try {
    const { lessonTitle } = req.params;
    const foundLesson = await Lesson.findOne({ title: lessonTitle })
      .populate('words')
      .populate('phrases');

    res.status(200).json({ status: 'success', lesson: foundLesson });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
