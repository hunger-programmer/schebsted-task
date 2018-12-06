const queryString = require('query-string');

module.exports = {
  title: {
    in: ['body'],
    isString: true,
    isLength: {
      errorMessage: 'Video title should have 4 chars at least',
      options: { min: 4 },
    },
  },
  comment: {
    in: ['body'],
    isString: true,
  },
  url: {
    in: ['body'],
    custom: {
      options: value => value.includes('https://www.youtube.com') && !!queryString.parse(value.split('?')[1]).v,
      errorMessage: 'Schibsted Music APP supports only YouTube videos!',
    },
  },
};
