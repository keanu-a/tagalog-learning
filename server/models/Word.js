const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  tagalog: {
    type: String,
    required: [true, 'Word must have tagalog translation'],
    unique: true,
  },
  english: {
    type: [String],
    required: [true, 'Word must have english translation'],
  },
  root: {
    type: String,
    required: [true, 'Word must have a root'],
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
      'article',
      'particle',
    ],
  },
  conjugations: {
    type: {
      past: {
        type: {
          tagalog: {
            type: String,
            required: [true, 'Past tense must have tagalog'],
          },
          english: {
            type: String,
            required: [true, 'Past tense must have english'],
          },
          audioUrl: {
            type: String,
          },
        },
        required: [true, 'Conjugation must have a past tense'],
      },
      present: {
        type: {
          tagalog: {
            type: String,
            required: [true, 'Present tense must have tagalog'],
          },
          english: {
            type: String,
            required: [true, 'Present tense must have english'],
          },
          audioUrl: {
            type: String,
          },
        },
        required: [true, 'Conjugation must have a present tense'],
      },
      future: {
        type: {
          tagalog: {
            type: String,
            required: [true, 'Future tense must have tagalog'],
          },
          english: {
            type: String,
            required: [true, 'Future tense must have english'],
          },
          audioUrl: {
            type: String,
          },
        },
        required: [true, 'Conjugation must have a future tense'],
      },
    },
    required: this.partOfSpeech === 'verb',
  },
  examples: {
    type: [mongoose.Types.ObjectId],
    ref: 'Phrase',
    default: undefined,
  },
  audioUrl: {
    type: String,
  },
  note: {
    type: String,
    default: undefined,
  },
});

const Word = mongoose.model('Word', WordSchema);
module.exports = Word;
