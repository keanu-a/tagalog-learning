const Word = require('../models/Word.js');

function diacriticSensitiveRegex(string) {
  return string
    .replace(/a/g, '[a,á]')
    .replace(/e/g, '[e,é]')
    .replace(/i/g, '[i,í]')
    .replace(/o/g, '[o,ó]')
    .replace(/u/g, '[u,ú]');
}

// This function gets only one word
module.exports.getWord = async (req, res) => {
  try {
    const { word } = req.params;
    const foundWord = await Word.findOne({
      $or: [
        { tagalog: { $regex: diacriticSensitiveRegex(word) } },
        { english: { $in: [word] } },
        {
          'conjugations.past.tagalog': {
            $regex: diacriticSensitiveRegex(word),
          },
        },
        { 'conjugations.past.english': word },
        {
          'conjugations.present.tagalog': {
            $regex: diacriticSensitiveRegex(word),
          },
        },
        { 'conjugations.present.english': word },
        {
          'conjugations.future.tagalog': {
            $regex: diacriticSensitiveRegex(word),
          },
        },
        { 'conjugations.future.english': word },
      ],
    });

    // If word found, return word
    if (foundWord) {
      res.status(200).json({ status: 'success', word: foundWord });
    } else {
      res.status(404).json({ status: 'fail', message: 'Word not found' });
    }
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

// This function gets all words related to the parameters
module.exports.getWords = async (req, res) => {
  try {
    const { query } = req.params;

    const foundWords = await Word.find({
      $or: [
        { tagalog: { $regex: diacriticSensitiveRegex(query) } },
        { english: { $in: [query] } },
        { root: query },
        {
          'conjugations.past.tagalog': {
            $regex: diacriticSensitiveRegex(query),
          },
        },
        { 'conjugations.past.english': query },
        {
          'conjugations.present.tagalog': {
            $regex: diacriticSensitiveRegex(query),
          },
        },
        { 'conjugations.present.english': query },
        {
          'conjugations.future.tagalog': {
            $regex: diacriticSensitiveRegex(query),
          },
        },
        { 'conjugations.future.english': query },
      ],
    }).limit(3);

    // If words found, return words
    if (foundWords.length > 0) {
      res.status(200).json({ status: 'success', words: foundWords });
    } else {
      res.status(404).json({ status: 'fail', message: `No words found` });
    }
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};
