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
  words: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Word',
    required: [true, 'Phrase must have word references it uses.'],
  },
});

const Phrase = new mongoose.model('Phrase', PhraseSchema);
module.exports = Phrase;
