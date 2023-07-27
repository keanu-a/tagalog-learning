const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  tagalog: {
    type: String,
    required: [true, 'Word must have tagalog translation'],
    unique: true,
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
            required: [true, 'Must define accents for past tense'],
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
            required: [true, 'Must define accents for present tense'],
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
            required: [true, 'Must define accents for future tense'],
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

// Helper function
function isVowel(letter) {
  if (typeof letter !== 'string') return false;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter.toLowerCase());
}

function validateAccents(accents, fieldType) {
  if (Array.isArray(accents)) {
    let containsLetterPosition = true;
    let letterIsVowel = true;

    // Check if all elements are of type object
    const areAllElementsObjects = accents.every((e) => {
      // If element isnt an object, return false
      if (typeof e !== 'object') return false;

      // If letter isnt a string or position isnt a number, false
      if (typeof e.letter !== 'string' || typeof e.position !== 'number') {
        containsLetterPosition = false;
      }

      letterIsVowel = isVowel(e.letter);

      return true;
    });

    // If not all elements are objects, error
    if (!areAllElementsObjects)
      throw new Error(`All elements in "${fieldType}" accents must be objects`);

    // If an element doesnt contain a letter or a position, error
    if (!containsLetterPosition)
      throw new Error(
        `All objects in "${fieldType}" accents must have a letter of type string and position of type number`
      );

    // If a letter isn't a vowel, error
    if (!letterIsVowel)
      throw new Error(
        `All letters in "${fieldType}" accents array must be vowels`
      );
  } else if (typeof accents !== 'object') {
    // If the accents field isnt an array or an object, error
    throw new Error(
      `Accents in "${fieldType}" is not an array of objects or an object`
    );
  }

  // If it is an object, check if it has a letter of type string and position of type number
  if (
    typeof accents.letter !== 'string' ||
    typeof accents.position !== 'number'
  ) {
    throw new Error(
      `Accents in "${fieldType}" does not have a letter of type string and position of type number`
    );
  }

  if (!isVowel(accents.letter)) {
    throw new Error(`Letter must be a vowel in "${fieldType}" accents`);
  }
}

/* WORD MIDDLEWARE */

// This middleware function checks the english field
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
        new Error('Not all elements in the english field array are strings')
      );
    }
  } else if (typeof this.english !== 'string') {
    // If the field isnt of type array or string, then error
    next(new Error('English field is not of Array of strings or a string'));
  }

  // Continue to save if passes checks
  next();
});

// This middleware function checks the conjugations accents field
WordSchema.pre('save', function (next) {
  try {
    validateAccents(this.conjugations.past.accents, 'past');
    validateAccents(this.conjugations.present.accents, 'present');
    validateAccents(this.conjugations.future.accents, 'future');
  } catch (err) {
    next(err);
  }
});

// This middleware function checks the accents field
WordSchema.pre('save', function (next) {
  try {
    validateAccents(this.accents, 'word');
  } catch (err) {
    next(err);
  }
});

const Word = mongoose.model('Word', WordSchema);
module.exports = Word;
