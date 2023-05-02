const mongoose = require('mongoose');

const TenseSchema = new mongoose.Schema(
  {
    present: {
      type: String,
      required: [true, 'Verb must have a present tense'],
    },
    past: {
      type: String,
      required: [true, 'Verb must have a past tense'],
    },
    future: {
      type: String,
      required: [true, 'Verb must have a future tense'],
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

const ExampleSchema = new mongoose.Schema(
  {
    tagalog: {
      type: String,
      required: [true, 'Example must have tagalog translation'],
    },
    english: {
      type: String,
      required: [true, 'Example must have english translation'],
    },
  },
  { _id: false }
);

const WordSchema = new mongoose.Schema({
  root: {
    type: String,
    required: true,
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
    ],
  },
  tenses: {
    type: TenseSchema,
    required: this.partOfSpeech === 'verb',
  },
  stress: {
    type: StressSchema,
    required: [true, 'Word must have letter and place of emphasis'],
  },
  example: {
    type: ExampleSchema,
  },
});

const Word = mongoose.model('Word', WordSchema);
module.exports = Word;
