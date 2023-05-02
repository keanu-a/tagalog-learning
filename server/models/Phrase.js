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
  hint: {
    type: String,
  },
});

const Phrase = new mongoose.model('Phrase', PhraseSchema);
module.exports = Phrase;
