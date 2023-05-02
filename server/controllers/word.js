const Word = require('../models/Word.js');

module.exports.getWord = async (req, res) => {
  try {
    const { word } = req.params;
    const foundWord = await Word.findOne({ tagalog: word });

    res.status(200).json({ status: 'success', word: foundWord });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
