const { lessonOneWordData } = require('./lessonOneWords');
const { lessonTwoWordData } = require('./lessonTwoWords');

module.exports.wordData = [...lessonOneWordData, ...lessonTwoWordData];
