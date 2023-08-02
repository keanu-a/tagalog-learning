module.exports.lessonOneTest = [
  {
    title: 'Introduce Yourself',
    questions: [
      {
        questionType: 'choose-word',
        // ako
        word: '64c863c369d4defa895e43fb',
        // ikaw, ako, siya, ang
        options: [
          '64c863c369d4defa895e4402',
          '64c863c369d4defa895e43fb',
          '64c863c369d4defa895e4408',
          '64c863c469d4defa895e4417',
        ],
        answer: 1,
      },
      {
        questionType: 'choose-word',
        // ikaw
        word: '64c863c369d4defa895e4402',
        // ano, siya, niya, ikaw
        options: [
          '64c863c469d4defa895e441d',
          '64c863c369d4defa895e4408',
          '64c863c469d4defa895e4411',
          '64c863c369d4defa895e4402',
        ],
        answer: 3,
      },
      {
        questionType: 'answer-phrase',
        // Anong pangalan mo?
        phrase: '64c8747d3a3feaa4f7fbd93d',
        // Ako si {name}
        // Nagtatrabaho ako sa ospital
        options: ['64c8747d3a3feaa4f7fbd93f', '64c8747d3a3feaa4f7fbd941'],
        answer: 0,
      },
      {
        questionType: 'fill-blank',
        // Anong pangalan mo?
        phrase: '64c8747d3a3feaa4f7fbd93d',
        hideWord: 2,
        // trabaho, ospital, pangalan, kaibigan
        options: [
          '64c863c569d4defa895e4444',
          '64c863c669d4defa895e446b',
          '64c863c469d4defa895e4426',
          '64c863c569d4defa895e4435',
        ],
        answer: 2,
      },
      {
        questionType: 'translate-phrase',
        // Nagtatrabaho ako sa ospital
        phrase: '64c8747d3a3feaa4f7fbd941',
        // ka, nag-aaral
        options: ['64c863c369d4defa895e4405', '64c863c669d4defa895e444d'],
      },
      {
        questionType: 'conjugate',
        // Nag-aral ka. Nag-aaral ako
        phrase: '64c082f4c6f5156fdb33b529',
        // Nagtrabaho, siya, nagtuturo
        options: [
          '64be1b8b44afae50efbb13b5',
          '64be1b8b44afae50efbb1398',
          '64beceaa7285c7c47fb56525',
        ],
      },
      {
        questionType: 'formal-phrase',
        // Ano po ang pangalan ninyo?
        phrase: '64c8747d3a3feaa4f7fbd93e',
        // mo, kaibigan
        options: ['64c863c469d4defa895e440e', '64c863c569d4defa895e4435'],
      },
    ],
  },
];

module.exports.lessonOneLessonData = [
  {
    title: 'basics',
    questions: [
      // Start with a choose-word 5/11
      {
        questionType: 'choose-word',
        // oo
        word: '645b4131913af0bba95009f6',
        options: [
          '645b4131913af0bba95009f7',
          '645b4131913af0bba95009f9',
          '645b4131913af0bba95009f6',
          '645b4131913af0bba9500a01',
        ],
        answer: 2,
      },
      {
        questionType: 'choose-word',
        // hindi
        word: '645b4131913af0bba95009f7',
        options: [
          '645b4131913af0bba95009f8',
          '645b4131913af0bba95009f6',
          '645b4131913af0bba95009ff',
          '645b4131913af0bba95009f7',
        ],
        answer: 3,
      },
      {
        questionType: 'choose-word',
        // ako
        word: '645b4131913af0bba95009f8',
        options: [
          '645b4131913af0bba95009fd',
          '645b4131913af0bba95009f8',
          '645b4131913af0bba95009fa',
          '645b4131913af0bba95009ff',
        ],
        answer: 1,
      },
      {
        questionType: 'choose-word',
        // lalaki
        word: '645b4131913af0bba9500a01',
        options: [
          '645b4131913af0bba9500a01',
          '645b4131913af0bba95009f6',
          '645b4131913af0bba9500a04',
          '645b4131913af0bba95009f7',
        ],
        answer: 0,
      },
      {
        questionType: 'fill-blank',
        // I am a man.
        phrase: '645ddc587cabf935f358b938',
        hideWord: 0,
        options: [
          '645b4131913af0bba9500a06',
          '645b4131913af0bba9500a01',
          '645b4131913af0bba9500a02',
          '645b4131913af0bba95009f7',
        ],
        answer: 1,
      },
      {
        questionType: 'choose-word',
        // babae
        word: '645b4131913af0bba9500a00',
        options: [
          '645b4131913af0bba9500a05',
          '645b4131913af0bba9500a00',
          '645b4131913af0bba95009f6',
          '645b4131913af0bba9500a01',
        ],
        answer: 1,
      },
      {
        questionType: 'choose-word',
        // ka
        word: '645b4131913af0bba95009fa',
        options: [
          '645b4131913af0bba95009fa',
          '645b4131913af0bba95009fc',
          '645b4131913af0bba9500a03',
          '645b4131913af0bba9500a06',
        ],
        answer: 0,
      },
      {
        questionType: 'fill-blank',
        // You are a woman.
        phrase: '645ddc587cabf935f358b93a',
        hideWord: 0,
        options: [
          '645b4131913af0bba9500a02',
          '645b4131913af0bba9500a01',
          '645b4131913af0bba95009ff',
          '645b4131913af0bba9500a00',
        ],
        answer: 3,
      },
      {
        questionType: 'choose-word',
        // matulog
        word: '645b4131913af0bba9500a08',
        options: [
          '645b4131913af0bba9500a09',
          '645b4131913af0bba9500a0b',
          '645b4131913af0bba9500a08',
          '645b4131913af0bba9500a0a',
        ],
        answer: 2,
      },
      {
        questionType: 'choose-word',
        // siya
        word: '645b4131913af0bba95009fb',
        options: [
          '645b4131913af0bba95009fb',
          '645b4131913af0bba95009f9',
          '645b4131913af0bba9500a06',
          '645b4131913af0bba9500a08',
        ],
        answer: 0,
      },
      {
        questionType: 'conjugate',
        // He/She is sleeping
        phrase: '645ddc587cabf935f358b93b',
        options: [
          '645b4131913af0bba9500a08',
          '645b4131913af0bba95009fb',
          '645b4131913af0bba95009fa',
          '645b4131913af0bba95009f8',
        ],
      },
    ],
  },
  {
    title: 'greetings',
    questions: [
      // Start with a choose-word 5/11
      {
        questionType: 'choose-word',
        // kamusta
        word: '645b4131913af0bba9500a07',
        options: [
          '645b4131913af0bba9500a07',
          '645b4131913af0bba9500a05',
          '645b4131913af0bba95009f9',
          '645b4131913af0bba9500a01',
        ],
        answer: 0,
      },
    ],
  },
];
