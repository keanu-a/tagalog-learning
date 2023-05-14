const mongoose = require('mongoose');

const PhraseSchema = new mongoose.Schema({
  tagalog: {
    type: String,
    required: [true, 'Phrase must have tagalog translation'],
  },
  english: {
    type: String,
    required: [true, 'Phrase must have english translation'],
  },
  isAskingQuestion: {
    type: Boolean,
    default: false,
  },
  // An array of either phrases or simple strings like grammar marks / names
  words: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Word',
    required: [true, 'Phrase must have word references it uses.'],
  },
  // words: {
  //   type: [
  //     {
  //       dbWord: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: 'Word',
  //       },
  //       nonDbWord: {
  //         type: String,
  //       },
  //     },
  //   ],
  //   required: true,
  // },
  verbTenseNeeded: [
    {
      type: String,
      enum: ['past', 'present', 'future', 'infinitive'],
      sparse: true,
    },
  ],
});

const Phrase = new mongoose.model('Phrase', PhraseSchema);
module.exports = Phrase;
