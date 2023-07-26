const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Lesson must have a title'],
    unique: true,
  },
  questions: [
    {
      questionType: {
        type: String,
        required: [true, 'Must specify question type.'],
        enum: [
          'choose-word',
          'answer-phrase',
          'fill-blank',
          'translate-phrase',
          'conjugate',
        ],
      },
      word: {
        type: mongoose.Types.ObjectId,
        ref: 'Word',
        validate: {
          validator: function () {
            return this.questionType === 'choose-word';
          },
          message: 'word field is required for choose-word question type',
        },
      },
      phrase: {
        type: mongoose.Types.ObjectId,
        ref: 'Phrase',
        validate: {
          validator: function () {
            return this.questionType !== 'choose-word';
          },
          message:
            'phrase field is required for NON choose-word question types',
        },
      },
      hideWord: {
        type: Number,
        validate: {
          validator: function () {
            return this.questionType === 'fill-blank';
          },
          message: 'hideWord field required for fill-blank',
        },
      },
      options: {
        type: [
          {
            type: mongoose.Types.ObjectId,
            ref: 'Word',
          },
          {
            type: mongoose.Types.ObjectId,
            ref: 'Phrase',
          },
        ],
        required: [true, 'Lesson must have options'],
      },
      answer: {
        type: Number,
        validate: {
          validator: function () {
            return (
              this.questionType !== 'conjugate' &&
              this.questionType !== 'translate-phrase'
            );
          },
          message:
            'Answer number index is required for NON conjugate and translate-phrase question type',
        },
      },
    },
  ],
});

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;
