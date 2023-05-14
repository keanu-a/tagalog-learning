const mongoose = require('mongoose');
const Phrase = require('./Phrase.js');
const Word = require('./Word.js');

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
        required: function () {
          if (
            this.questionType === 'choose-word' ||
            this.questionType === 'conjugate'
          ) {
            return true;
          }
        },
      },
      phrase: {
        type: mongoose.Types.ObjectId,
        ref: 'Phrase',
        required: function () {
          if (
            this.questionType === 'answer-phrase' ||
            this.questionType === 'translate-phrase' ||
            this.questionType === 'fill-blank'
          ) {
            return true;
          }
        },
      },
      // Added 5/11 to hide word in a phrase when filling blank
      hideWord: {
        // Index based on an array
        type: Number,
        required: [
          function () {
            if (this.questionType === 'fill-blank') return true;
          },
          'If question type is fill-blank, must provide which index in the phrase to hide',
        ],
      },
      options: {
        type: [
          // Could be a word
          {
            type: mongoose.Types.ObjectId,
            ref: 'Word',
            required: [
              function () {
                if (this.questionType === 'answer-phrase') return false;
                else true;
              },
              'If question type isnt answer-phrase, it must have word options',
            ],
          },
          // Could be a phrase if we answer-phrase
          {
            type: mongoose.Types.ObjectId,
            ref: 'Phrase',
            required: [
              function () {
                if (this.questionType === 'answer-phrase') return true;
              },
              'If question type is answer-phrase, it must have phrase options',
            ],
          },
          {
            // These are custom phrases or words
            type: String,
          },
        ],
        required: [true, 'Lesson must have options'],
      },
      answer: {
        // Using array index - Starting at 0
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
