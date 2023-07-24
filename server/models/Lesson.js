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
          'translate-phrase',
          'fill-blank',
          'conjugate',
        ],
      },
      word: {
        type: mongoose.Types.ObjectId,
        ref: 'Word',
        required: this.questionType === 'choose-word',
      },
      phrase: {
        type: mongoose.Types.ObjectId,
        ref: 'Phrase',
        required: this.questionType !== 'choose-word',
      },
      hideWord: {
        type: Number,
        required: this.questionType === 'fill-blank',
      },
      options: {
        type: [
          {
            type: mongoose.Types.ObjectId,
            ref: 'Word',
            required: [
              this.questionType !== 'answer-phrase',
              'Must provide word options if question type is NOT answer-phrase',
            ],
          },
          {
            type: mongoose.Types.ObjectId,
            ref: 'Phrase',
            required: [
              this.questionType === 'answer-phrase',
              'Must provide phrase options if question type is answer-phrase',
            ],
          },
        ],
        required: [true, 'Lesson must have options'],
      },
      answer: {
        type: Number,
        required: [
          function () {
            if (
              this.questionType === 'conjugate' ||
              this.questionType === 'translate-phrase'
            )
              return false;
            else return true;
          },
          'Lesson must specify which index in the options array is the answer',
        ],
      },
    },
  ],
});

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;
