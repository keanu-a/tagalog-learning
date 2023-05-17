const mongoose = require('mongoose');

const Phrase = require('./Phrase.js');

const TenseSchema = new mongoose.Schema(
  {
    present: {
      _id: {
        type: mongoose.Types.ObjectId,
        default: function () {
          return mongoose.Types.ObjectId();
        },
      },
      tagalog: {
        type: String,
        required: [true, 'Verb must have a Tagalog present tense'],
      },
      english: {
        type: String,
        required: [true, 'Verb must have an English present tense'],
      },
    },
    past: {
      _id: {
        type: mongoose.Types.ObjectId,
        default: function () {
          return mongoose.Types.ObjectId();
        },
      },
      tagalog: {
        type: String,
        required: [true, 'Verb must have a Tagalog past tense'],
      },
      english: {
        type: String,
        required: [true, 'Verb must have an English past tense'],
      },
    },
    future: {
      _id: {
        type: mongoose.Types.ObjectId,
        default: function () {
          return mongoose.Types.ObjectId();
        },
      },
      tagalog: {
        type: String,
        required: [true, 'Verb must have a Tagalog future tense'],
      },
      english: {
        type: String,
        required: [true, 'Verb must have an English future tense'],
      },
    },
  },
  { _id: false }
);

const StressSchema = new mongoose.Schema(
  {
    letter: {
      type: String,
      required: [true, 'Word must have a stressed letter'],
    },
    place: {
      type: Number,
      required: [true, 'Word must have which n-th letter'],
    },
  },
  { _id: false }
);

const WordSchema = new mongoose.Schema({
  root: {
    type: String,
    required: [true, 'Word must have a root'],
  },
  tagalog: {
    type: String,
    required: [true, 'Word must have tagalog translation'],
    unique: true,
  },
  english: {
    type: String,
    required: [true, 'Word must have english translation'],
  },
  partOfSpeech: {
    type: String,
    enum: [
      'verb',
      'pronoun',
      'interrogative',
      'adverb',
      'adjective',
      'noun',
      'preposition',
      'interjection',
      'conjunction',
      'particle',
      'article',
    ],
  },
  tenses: {
    type: TenseSchema,
    required: this.partOfSpeech === 'verb',
  },
  // Thinking of adding array of StressSchema 5/9/2023
  stress: {
    type: StressSchema,
    required: [true, 'Word must have letter and place of emphasis'],
  },
  // An array of phrases
  examples: {
    type: [mongoose.Types.ObjectId],
    ref: 'Phrase',
  },
  note: {
    type: String,
  },
});

const Word = mongoose.model('Word', WordSchema);
module.exports = Word;
