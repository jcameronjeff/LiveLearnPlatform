const questionItems = [
  {
    id: 1,
    context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
        'ncididunt ut labore et dolore magna aliqua. Interdum consectetur libero id fauci' +
        'bus nisl tincidunt eget nullam non.',
    stem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answers: [
      {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: true,
        id: "q234512345"
      }, {
        text: 'ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: false,
        id: "q234512342"
      }, {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: false,
        id: "q234512341"

      }, {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: false,
        id: "q234512340"
      }
    ]
  }, {
    id: 2,
    context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
        'ncididunt ut labore et dolore magna aliqua. Interdum consectetur libero id fauci' +
        'bus nisl tincidunt eget nullam non.',
    stem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answers: [
      {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: true
      }, {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: false
      }, {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: false
      }, {
        text: 'Lorem ipsum dolor sit.',
        feedback: 'Lorem ipsum dolor sit.  faucibus nisl tincidunt.',
        correct: false
      }
    ]
  }
];

export default questionItems;
