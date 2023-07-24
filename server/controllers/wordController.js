const mongoose = require('mongoose');
const Word = require('../models/Word.js');

// This function gets only one word
module.exports.getWord = async (req, res) => {
  try {
    const { word } = req.params;
    const foundWord = await Word.findOne({
      $or: [
        { tagalog: word },
        { english: { $in: [word] } },
        { 'conjugations.past.tagalog': word },
        { 'conjugations.past.english': word },
        { 'conjugations.present.tagalog': word },
        { 'conjugations.present.english': word },
        { 'conjugations.future.tagalog': word },
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
module.exports.getRelatedWords = async (req, res) => {
  try {
    const { root } = req.params;

    const foundWords = await Word.find({ root: root }).limit(3);

    // If words found, return words
    if (foundWords.length > 0) {
      res.status(200).json({ status: 'success', words: foundWords });
    } else {
      res
        .status(404)
        .json({ status: 'fail', message: `No words with root: ${root}` });
    }
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

module.exports.updateWord = async (word) => {
  const presentId = new mongoose.Types.ObjectId();
  const pastId = new mongoose.Types.ObjectId();
  const futureId = new mongoose.Types.ObjectId();

  await Word.findOneAndUpdate(
    { tagalog: word },
    {
      tenses: {
        present: {
          _id: presentId,
          tagalog: 'natutulog',
          english: 'sleeping',
        },
        past: {
          _id: pastId,
          tagalog: 'natulog',
          english: 'slept',
        },
        future: {
          _id: futureId,
          tagalog: 'matutulog',
          english: 'will sleep',
        },
      },
    }
  );
};
