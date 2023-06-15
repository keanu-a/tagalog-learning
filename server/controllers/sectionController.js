const Section = require('../models/Section.js');

module.exports.getSection = async (req, res) => {
  try {
    const { sectionTitle } = req.params;
    const foundSection = await Section.findOne({
      title: sectionTitle,
    }).populate({ path: 'lessons', select: 'title' });

    res.status(200).json({ status: 'success', section: foundSection });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
