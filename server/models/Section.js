const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Section must have a title'],
    unique: true,
  },
  lessons: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Lesson',
  },
});

const Section = new mongoose.model('Section', SectionSchema);
module.exports = Section;
