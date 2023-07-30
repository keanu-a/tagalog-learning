const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  tagalog: {
    type: String,
    required: [true, 'Word must have tagalog translation'],
  },
  english: {
    type: mongoose.Schema.Types.Mixed,
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
          accents: {
            type: mongoose.Schema.Types.Mixed,
            required: [true, 'Must define accents index(es) for past tense'],
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
          accents: {
            type: mongoose.Schema.Types.Mixed,
            required: [true, 'Must define accents index(es) for present tense'],
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
          accents: {
            type: mongoose.Schema.Types.Mixed,
            required: [true, 'Must define accents index(es) for future tense'],
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
  accents: {
    type: mongoose.Schema.Types.Mixed,
    default: undefined,
  },
});

/************************************/
/* HELPER FUNCTIONS FOR MIDDLEWARES */
/************************************/

// This function takes in accents (number or array of numbers), field type, and the word
// It then makes sure the accents array is in proper form
function validateAccents(accents, fieldType, word) {
  // First check if accents is an array
  if (Array.isArray(accents)) {
    // Check if all elements are of type Number
    const areAllElementsNumbers = accents.every((e) => {
      return typeof e === 'number';
    });

    if (!areAllElementsNumbers) {
      throw new Error(
        `Array in accents field of the ${fieldType} are not all numbers (${word})`
      );
    }

    // If it passes
    return;
  }

  // Next check if it is not a number
  if (accents && typeof accents !== 'number') {
    // If the accents field isnt an array or a number, error
    throw new Error(
      `Accents field of the ${fieldType} is not a number (${word})`
    );
  }

  return;
}

// This function checks if the accents fields of two words are the same
function areAccentsEqual(existingAccents, newAccents) {
  // Accents fields can only be number or array

  if (typeof existingAccents === 'number' && typeof newAccents === 'number') {
    return existingAccents === newAccents;
  }

  if (Array.isArray(existingAccents) && Array.isArray(newAccents)) {
    if (existingAccents.length !== newAccents.length) {
      return false;
    }

    for (let i = 0; i < existingAccents.length; i++) {
      if (existingAccents[i] !== newAccents[i]) {
        return false;
      }
    }

    return true;
  }
}

/*****************************/
/* WORD MIDDLEWARE FUNCTIONS */
/*****************************/

// This middleware function validates the english field
WordSchema.pre('save', function (next) {
  // First check if the english field is an array
  if (Array.isArray(this.english)) {
    // Check if each element in the array is of type String
    const areAllStrings = this.english.every((e) => {
      return typeof e === 'string';
    });

    // If they are all not of type strings, error
    if (!areAllStrings) {
      next(
        new Error(
          `Not all elements in the english field array are strings ${this.tagalog}`
        )
      );
    }

    next();
  }

  // Next check if it is not a string
  if (typeof this.english !== 'string') {
    // If the field isnt of type array or string, then error
    next(
      new Error(
        `English field is not of Array of strings or a string ${this.tagalog}`
      )
    );
  }

  // Continue to save if passes checks
  next();
});

// This middleware function validates the conjugations accents field
WordSchema.pre('save', function (next) {
  if (this.partOfSpeech !== 'verb') next();

  try {
    validateAccents(
      this.conjugations.past.accents,
      'past conjugation',
      this.tagalog
    );
    validateAccents(
      this.conjugations.present.accents,
      'present conjugation',
      this.tagalog
    );
    validateAccents(
      this.conjugations.future.accents,
      'future conjugation',
      this.tagalog
    );
    next();
  } catch (err) {
    next(err);
  }
});

// This middleware function validates the word accents field
WordSchema.pre('save', function (next) {
  try {
    validateAccents(this.accents, 'word', this.tagalog);
    next();
  } catch (err) {
    next(err);
  }
});

// This middleware function validates if the word exists or not
// If it does exist, checks the accents of the found DB word
WordSchema.pre('save', async function (next) {
  try {
    const existingWord = await Word.findOne({ tagalog: this.tagalog });

    // Checks if tagalog word is in the DB
    if (existingWord) {
      // Next check if the existing word has different accents
      if (areAccentsEqual(existingWord.accents, this.accents)) {
        throw new Error(
          'Word already exists in the database. (Same tagalog and accents)'
        );
      }
    }

    // Next if doesn't exist yet, or exists but different accents
    next();
  } catch (err) {
    next(err);
  }
});

const Word = mongoose.model('Word', WordSchema);
module.exports = Word;
