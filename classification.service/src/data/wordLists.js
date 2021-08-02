const wordList = {
  listA: ['Alert', 'Critical', 'Immediate', 'Important', 'Urgent', 'Warning'],
  listB: ['Clear', 'Good', 'Nothing', 'OK', 'Quiet'],
  // listN
  colors: {
    URGENT: 'secondary', // this is because secondary stands out more than primary
    'NOT URGENT': 'primary',
    UNKNOWN: 'default',
  },
};

module.exports = {
  wordList,
};
