const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const wordRoutes = require('./routes/wordRoutes.js');
const phraseRoutes = require('./routes/phraseRoutes.js');
const lessonRoutes = require('./routes/lessonRoutes.js');
const sectionRoutes = require('./routes/sectionRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const audioRoutes = require('./routes/audioRoutes.js');

//* FOR IMPORTING DATA *//
const Word = require('./models/Word.js');
const Phrase = require('./models/Phrase.js');
const Lesson = require('./models/Lesson.js');
const Section = require('./models/Section.js');

const { wordData } = require('./data/words/words.js');

const { phraseData } = require('./data/phrases/phrases.js');
const { test } = require('./data/phrases/lessonOnePhrases.js');

const { lessonOneTest } = require('./data/lessons/lessonOne.js');

const { sectionOneTest } = require('./data/sections/sections.js');

//* CONFIGURATIONS *//
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json({ limit: '10kb' }));

//* ROUTES *//
app.use('/api/v1/word', wordRoutes);
app.use('/api/v1/phrase', phraseRoutes);
app.use('/api/v1/lesson', lessonRoutes);
app.use('/api/v1/section', sectionRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/audio', audioRoutes);

//* MONGOOSE AND SERVER SETUP *//
const port = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'tagalog-learning',
  })
  .then(async () => {
    app.listen(port, () => console.log(`Server running on port ${port}`));

    // Inserting data, REMEMBER comment out

    // INSERTING LESSON ONE WORD DATA
    // for (const word of wordData) {
    //   const newWord = new Word(word);
    //   await newWord.save();
    // }
    // console.log('Words added to the database');

    // Phrase.insertMany(test).then(() =>
    //   console.log('Phrases were added to the database!')
    // );

    // Lesson.insertMany(lessonOneTest).then(() =>
    //   console.log('Lessons were added to the database!')
    // );

    // Section.insertMany(sectionOneTest).then(() =>
    //   console.log('Sections were added to the database!')
    // );

    // UPDATING WORD AND PHRASE AUDIO
    // try {
    //   const word = await Word.findById(wordId);
    //   if (!word) {
    //     console.log(`Word with ID ${wordId} not found.`);
    //     return;
    //   }

    //   await word.updateAudioUrls(audioUrl);
    // } catch (error) {
    //   console.error('Error updating word audio URL:', error);
    // }
  })
  .catch((error) => console.log(error.message));
