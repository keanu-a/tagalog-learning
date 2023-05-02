/*
  {
    root: '',
    tagalog: '',
    english: '',
    partOfSpeech: '',
    stress: {
      letter: '',
      place: ,
    },
    example: {
      tagalog: '',
      english: '',
    },
  },
*/

const examples = [
  {
    root: 'ingat',
    tagalog: 'ingat',
    english: 'take care',
    partOfSpeech: 'interjection',
    stress: {
      letter: 'i',
      place: 1,
    },
    example: {
      tagalog: 'Paalam! Ingat!',
      english: 'Bye! Take care!',
    },
  },
  {
    root: 'tulog',
    tagalog: 'matulog',
    english: 'to sleep',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'natutulog',
      past: 'natulog',
      future: 'matutulog',
    },
    stress: {
      letter: 'u',
      place: 1,
    },
    example: {
      tagalog: 'Dapat matulog ka na.',
      english: 'You should sleep now.',
    },
  },
  {
    root: 'basa',
    tagalog: 'magbasa',
    english: 'to read',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'nagbabasa',
      past: 'nagbasa',
      future: 'magbabasa',
    },
    stress: {
      letter: 'a',
      place: 3,
    },
    example: {
      tagalog: 'Nagbasa ako ng aklat kagabi.',
      english: 'I read a book last night.',
    },
  },
  {
    root: 'kain',
    tagalog: 'kumain',
    english: 'to eat',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'kumakain',
      past: 'kumain',
      future: 'kakain',
    },
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Kumakain ako ng kanin.',
      english: 'I am eating rice.',
    },
  },
  {
    root: 'salamat',
    tagalog: 'salamat',
    english: 'thank you',
    partOfSpeech: 'interjection',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Salamat po.',
      english: "Thank you, sir/ma'am.",
    },
  },
  {
    root: 'ganda',
    tagalog: 'maganda',
    english: 'beautiful',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 3,
    },
    example: {
      tagalog: 'Maganda ang umaga.',
      english: 'The morning is beautiful.',
    },
  },
  {
    root: 'babae',
    tagalog: 'babae',
    english: 'woman',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Tangkad ang babae.',
      english: 'The woman is tall.',
    },
  },
  {
    root: 'lalaki',
    tagalog: 'lalaki',
    english: 'man',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Nakita niya and isang pangit na lalaki kanina.',
      english: 'He saw an ugly man earlier.',
    },
  },
  {
    root: 'tubig',
    tagalog: 'tubig',
    english: 'water',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
    example: {
      tagalog: 'Meron bang malinis na tubig dito?',
      english: 'Is there clean water here?',
    },
  },
  {
    root: 'kamay',
    tagalog: 'kamay',
    english: 'hand',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Maghugas ka ng kamay.',
      english: 'Wash your hands.',
    },
  },

  // BODY
];

module.exports.dataWord = [
  ////////////
  //* BODY *//
  ////////////
  {
    root: 'katawan',
    tagalog: 'katawan',
    english: 'body',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 3,
    },
  },
  {
    root: 'kamay',
    tagalog: 'kamay',
    english: 'hand',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Maghugas ka ng kamay.',
      english: 'Wash your hands.',
    },
  },
  {
    root: 'mukha',
    tagalog: 'mukha',
    english: 'face',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'mata',
    tagalog: 'mata',
    english: 'eye',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
    example: {
      tagalog: 'Pagod ang mga mata ko.',
      english: 'My eyes are tired.',
    },
  },
  {
    root: 'braso',
    tagalog: 'braso',
    english: 'arm',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'taas',
    tagalog: 'mataas',
    english: 'tall',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 3,
    },
  },
  {
    root: 'liit',
    tagalog: 'maliit',
    english: 'small / short',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'i',
      place: 2,
    },
  },
  {
    root: 'paa',
    tagalog: 'paa',
    english: 'feet',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'ilong',
    tagalog: 'ilong',
    english: 'nose',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'ligo',
    tagalog: 'maligo',
    english: 'to shower / to bathe',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'naliligo',
      past: 'naligo',
      future: 'maliligo',
    },
    stress: {
      letter: 'i',
      place: 1,
    },
    example: {
      tagalog: 'Kumakain ako ng kanin.',
      english: 'I am eating rice.',
    },
  },
  {
    root: 'daliri',
    tagalog: 'daliri',
    english: 'finger',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'ngipin',
    tagalog: 'ngipin',
    english: 'tooth / teeth',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },

  ///////////////
  //* WEATHER *//
  ///////////////
  {
    root: 'panahon',
    tagalog: 'panahon',
    english: 'weather / time / season',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 2,
    },
    example: {
      tagalog: 'Masamang panahon dito.',
      english: 'The weather is bad here.',
    },
  },
  {
    root: 'labas',
    tagalog: 'labas',
    english: 'outside',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Naghintay ako sa labas.',
      english: 'I waited outside.',
    },
  },
  {
    root: 'ulan',
    tagalog: 'ulan',
    english: 'rain',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
    example: {
      tagalog: 'Ayoko ng ulan.',
      english: 'I dont like the rain.',
    },
  },
  {
    root: 'ulan',
    tagalog: 'umulan',
    english: 'to rain',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'umulan',
      past: 'umuulan',
      future: 'uulan',
    },
    stress: {
      letter: 'a',
      place: 1,
    },
    example: {
      tagalog: 'Sana umulan ngayon.',
      english: 'I hope it rains today.',
    },
  },
  {
    root: 'araw',
    tagalog: 'araw',
    english: 'sun',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'araw',
    tagalog: 'maaraw',
    english: 'sunny',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'hangin',
    tagalog: 'hangin',
    english: 'wind / air',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
    example: {
      tagalog: 'Lumilipad ang ibon sa hangin.',
      english: 'The bird flys in the wind.',
    },
  },
  {
    root: 'init',
    tagalog: 'mainit',
    english: 'hot',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'i',
      place: 1,
    },
    example: {
      tagalog: 'Mainit sa labas.',
      english: 'It is hot outside.',
    },
  },
  {
    root: 'lamig',
    tagalog: 'malamig',
    english: 'cold',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'i',
      place: 1,
    },
    example: {
      tagalog: 'Malamig ang pagkain.',
      english: 'The food is cold.',
    },
  },

  ////////////////
  //* FEELINGS *//
  ////////////////
  {
    root: 'damdam',
    tagalog: 'damdamin',
    english: 'feelings',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'lungkot',
    tagalog: 'malungkot',
    english: 'to be sad',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'nalulungkot',
      past: 'nalungkot',
      future: 'malulungkot',
    },
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'saya',
    tagalog: 'masaya',
    english: 'happy',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 3,
    },
  },
  {
    root: 'galit',
    tagalog: 'galit',
    english: 'mad',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'pagod',
    tagalog: 'pagod',
    english: 'tired',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'tamad',
    tagalog: 'tamad',
    english: 'lazy',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'takot',
    tagalog: 'takot',
    english: 'afraid',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'takot',
    tagalog: 'matakot',
    english: 'to be afraid',
    partOfSpeech: 'verb',
    isIrregular: false,
    tenses: {
      present: 'natatakot',
      past: 'matakot',
      future: 'matatakot',
    },
    stress: {
      letter: 'a',
      place: 2,
    },
  },

  ////////////
  // * FAMILY *//
  ////////////
  {
    root: 'pamilya',
    tagalog: 'pamilya',
    english: 'family',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'kapatid',
    tagalog: 'kapatid',
    english: 'sibling / brother / sister',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'gulang',
    tagalog: 'magulang',
    english: 'parents',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'nanay',
    tagalog: 'nanay',
    english: 'mom',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'tatay',
    tagalog: 'tatay',
    english: 'dad',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'kuya',
    tagalog: 'kuya',
    english:
      'older brother / used in an informal friendly way to address an older male',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
    example: {
      tagalog: 'Mahal kita kuya Joe!',
      english: 'I love you Joe! (Older brother)',
    },
  },
  {
    root: 'ate',
    tagalog: 'ate',
    english:
      'older sister / used in an informal friendly way to address an older female',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'lola',
    tagalog: 'lola',
    english: 'grandma / grandmother',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'lolo',
    tagalog: 'lolo',
    english: 'grandpa / grandfather',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'tita',
    tagalog: 'tita',
    english: 'aunt',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'tito',
    tagalog: 'tito',
    english: 'uncle',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'ninong',
    tagalog: 'ninong',
    english: 'godfather',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'ninang',
    tagalog: 'ninang',
    english: 'godmother',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'pinsan',
    tagalog: 'pinsan',
    english: 'cousin',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'anak',
    tagalog: 'anak',
    english: 'child',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'asawa',
    tagalog: 'asawa',
    english: 'spouse / husband / wife',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },

  ////////////
  //* FOOD *//
  ////////////
  {
    root: 'kain',
    tagalog: 'pagkain',
    english: 'food',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'kain',
    tagalog: 'kumain',
    english: 'to eat',
    partOfSpeech: 'verb',
    tenses: {
      present: 'kumakain',
      past: 'kumain',
      future: 'kakain',
    },
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'itlog',
    tagalog: 'itlog',
    english: 'egg',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'manok',
    tagalog: 'manok',
    english: 'chicken',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'kanin',
    tagalog: 'kanin',
    english: 'rice',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'suka',
    tagalog: 'suka',
    english: 'vinegar',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'sibuyas',
    tagalog: 'sibuyas',
    english: 'onion',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'kamatis',
    tagalog: 'kamatis',
    english: 'tomato',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'saging',
    tagalog: 'saging',
    english: 'banana',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'alat',
    tagalog: 'maalat',
    english: 'salty',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'anghang',
    tagalog: 'maanghang',
    english: 'spicy',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 3,
    },
  },
  {
    root: 'tamis',
    tagalog: 'matamis',
    english: 'sweet',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'asim',
    tagalog: 'maasim',
    english: 'sour',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'baboy',
    tagalog: 'baboy',
    english: 'pork / pig',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'sarap',
    tagalog: 'masarap',
    english: 'delicious',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 3,
    },
  },

  {
    root: 'isda',
    tagalog: 'isda',
    english: 'fish',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'gulay',
    tagalog: 'gulay',
    english: 'vegetables',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'prutas',
    tagalog: 'prutas',
    english: 'fruits',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },

  ///////////////
  //* BEDROOM *//
  ///////////////
  {
    root: 'kuwarto',
    tagalog: 'kuwarto',
    english: 'room',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'kama',
    tagalog: 'kama',
    english: 'bed',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'tulog',
    tagalog: 'matulog',
    english: 'to sleep',
    partOfSpeech: 'verb',
    tenses: {
      present: 'natutulog',
      past: 'natulog',
      future: 'matutulog',
    },
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'telebisyon',
    tagalog: 'telebisyon',
    english: 'television',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'damit',
    tagalog: 'damit',
    english: 'clothes',
    partOfSpeech: 'noun',

    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'ilaw',
    tagalog: 'ilaw',
    english: 'light',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },

  ///////////////
  //* KITCHEN *//
  ///////////////
  {
    root: 'kusina',
    tagalog: 'kusina',
    english: 'kitchen',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'kutsilyo',
    tagalog: 'kutsilyo',
    english: 'knife',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'kutsara',
    tagalog: 'kutsara',
    english: 'spoon',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'tinidor',
    tagalog: 'tinidor',
    english: 'fork',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'plato',
    tagalog: 'plato',
    english: 'plate',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'kalan',
    tagalog: 'kalan',
    english: 'stove',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'kawali',
    tagalog: 'kawali',
    english: 'frying pan',
    partOfSpeech: 'noun',

    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'ref',
    tagalog: 'ref (slang)',
    english: 'fridge',
    partOfSpeech: 'noun',
    stress: {
      letter: 'e',
      place: 1,
    },
  },
  {
    root: 'gunting',
    tagalog: 'gunting',
    english: 'scissors',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'asin',
    tagalog: 'asin',
    english: 'salt',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'paminta',
    tagalog: 'paminta',
    english: 'pepper',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'tubig',
    tagalog: 'tubig',
    english: 'water',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'yelo',
    tagalog: 'yelo',
    english: 'ice',
    partOfSpeech: 'noun',
    stress: {
      letter: 'e',
      place: 1,
    },
  },
  {
    root: 'gatas',
    tagalog: 'gatas',
    english: 'milk',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'halo',
    tagalog: 'halo',
    english: 'mixture / mix',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'buhos',
    tagalog: 'ibuhos',
    english: 'to pour something',
    partOfSpeech: 'verb',
    tenses: {
      present: 'ibinubuhos',
      past: 'ibinuhos',
      future: 'ibubuhos',
    },
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'halo',
    tagalog: 'haluin',
    english: 'to stir / to mix',
    partOfSpeech: 'verb',
    tenses: {
      present: 'hinahalo',
      past: 'hinalo',
      future: 'hahaluin',
    },
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'pinggan',
    tagalog: 'pinggan',
    english: 'dishes',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'lamesa',
    tagalog: 'lamesa',
    english: 'table',
    partOfSpeech: 'noun',
    stress: {
      letter: 'w',
      place: 1,
    },
  },

  //////////////
  //* TRAVEL *//
  //////////////
  {
    root: 'lipad',
    tagalog: 'lumipad',
    english: 'to fly',
    partOfSpeech: 'verb',
    tenses: {
      present: 'lumilipad',
      past: 'lumipad',
      future: 'lilipad',
    },
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'lungsod',
    tagalog: 'lungsod',
    english: 'city',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'bansa',
    tagalog: 'bansa',
    english: 'country',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'saan',
    tagalog: 'nasaan',
    english: 'where',
    partOfSpeech: 'interrogative',
    stress: {
      letter: 'a',
      place: 2,
    },
    example: {
      tagalog: 'Nasaan ang bangko?',
      english: 'Where is the bank?',
    },
  },
  {
    root: 'bakasyon',
    tagalog: 'bakasyon',
    english: 'vacation',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'bangka',
    tagalog: 'bangka',
    english: 'boat',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'barko',
    tagalog: 'barko',
    english: 'ship',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'malayo',
    tagalog: 'malayo',
    english: 'far',
    partOfSpeech: 'adjective',
    stress: {
      letter: 'a',
      place: 2,
    },
  },

  ////////////
  //* WORK *//
  ////////////
  {
    root: 'trabaho',
    tagalog: 'trabaho',
    english: 'job',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'trabaho',
    tagalog: 'katrabaho',
    english: 'coworker',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 3,
    },
  },

  //////////////////
  //* ACTIVITIES *//
  //////////////////
  {
    root: 'gawa',
    tagalog: 'gawain',
    english: 'activity / task',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'laro',
    tagalog: 'maglaro',
    english: 'to play',
    partOfSpeech: 'verb',
    tenses: {
      present: 'naglalaro',
      past: 'naglaro',
      future: 'maglalaro',
    },
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'sayaw',
    tagalog: 'sumayaw',
    english: 'to dance',
    partOfSpeech: 'verb',
    tenses: {
      present: 'sumasayaw',
      past: 'sumayaw',
      future: 'sasayaw',
    },
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'kanta',
    tagalog: 'kumanta',
    english: 'to sing',
    partOfSpeech: 'verb',
    tenses: {
      present: 'kumakanta',
      past: 'kumanta',
      future: 'kakanta',
    },
    stress: {
      letter: 'a',
      place: 2,
    },
  },

  //////////////
  //* NATURE *//
  //////////////
  {
    root: 'likas',
    tagalog: 'kalikasan',
    english: 'nature',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'mundo',
    tagalog: 'mundo',
    english: 'earth / world',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'punp',
    tagalog: 'puno',
    english: 'tree',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'lawa',
    tagalog: 'lawa',
    english: 'lake',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'dagat',
    tagalog: 'karagatan',
    english: 'ocean',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 4,
    },
  },
  {
    root: 'ibon',
    tagalog: 'ibon',
    english: 'bird',
    partOfSpeech: 'noun',
    stress: {
      letter: 'i',
      place: 1,
    },
  },
  {
    root: 'halaman',
    tagalog: 'halaman',
    english: 'plant',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'tanim',
    tagalog: 'magtanim',
    english: 'to play',
    partOfSpeech: 'verb',
    tenses: {
      present: 'nagtatanim',
      past: 'nagtanim',
      future: 'magtatanim',
    },
    stress: {
      letter: 'a',
      place: 2,
    },
  },
  {
    root: 'aso',
    tagalog: 'aso',
    english: 'dog',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
  {
    root: 'pusa',
    tagalog: 'pusa',
    english: 'cat',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'lupa',
    tagalog: 'lupa',
    english: 'ground / soil / land',
    partOfSpeech: 'noun',
    stress: {
      letter: 'u',
      place: 1,
    },
  },
  {
    root: 'bundok',
    tagalog: 'bundok',
    english: 'mountain',
    partOfSpeech: 'noun',
    stress: {
      letter: 'o',
      place: 1,
    },
  },
  {
    root: 'langit',
    tagalog: 'langit',
    english: 'sky',
    partOfSpeech: 'noun',
    stress: {
      letter: 'a',
      place: 1,
    },
  },
];
