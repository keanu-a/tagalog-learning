const Phrase = require('../models/Phrase.js');

module.exports.getPhrase = async (req, res) => {
  try {
    const { id } = req.params;

    const foundPhrase = await Phrase.findById(id);

    res.status(200).json({ status: 'success', phrase: foundPhrase });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
