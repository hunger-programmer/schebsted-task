const queryString = require('query-string');

module.exports = string => queryString.parse(string.split('?')[1]).v;
