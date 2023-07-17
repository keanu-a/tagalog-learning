const mongoose = require('mongoose');
const Word = require('../models/Word.js');

module.exports.getWord = async (req, res) => {
  try {
    const { word } = req.params;
    const foundWord = await Word.findOne({ tagalog: word });

    res.status(200).json({ status: 'success', word: foundWord });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
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
