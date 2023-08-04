const Lesson = require('../models/Lesson.js');

module.exports.getLesson = async (req, res) => {
  try {
    const { lessonTitle } = req.params;
    const foundLesson = await Lesson.findOne({ title: lessonTitle })
      .populate({
        path: 'questions.word',
        select: 'tagalog english partOfSpeech audioUrl',
      })
      .populate({
        path: 'questions.phrase',
        select: 'tagalog english words audioUrl',
      })
      .populate({
        path: 'questions.options',
        select: 'tagalog english partOfSpeech audioUrl',
      });

    // If word found, return word
    if (foundLesson) {
      res.status(200).json({ status: 'success', lesson: foundLesson });
    } else {
      res.status(404).json({ status: 'fail', message: 'Lesson not found' });
    }
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
  }
};
