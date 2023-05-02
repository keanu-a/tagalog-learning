const mongoose = require('mongoose');
const Phrase = require('./Phrase.js');
const Word = require('./Word.js');

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Lesson must have a title'],
    unique: true,
  },
  words: {
    type: [mongoose.Types.ObjectId],
    ref: 'Word',
    required: [true, 'Lesson must have words'],
  },
  phrases: {
    type: [mongoose.Types.ObjectId],
    ref: 'Phrase',
    required: [true, 'Lesson must have phrases'],
  },
});

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;
