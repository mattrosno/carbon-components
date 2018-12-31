const isNumber = require('lodash/isNumber');

const attrsHelper = (input = {}) => {
  let attributes = ' ';

  if (typeof input !== 'object' || Array.isArray(input)) {
    let itype = typeof input;
    if (Array.isArray(input)) {
      itype = 'array';
    }

    console.error(`attributes must be a non-array object, attrs helper received ${itype} instead`); // eslint-disable-line

    return '';
  }

  Object.keys(input).forEach(key => {
    attributes +=
      !isNumber(input[key]) && (!input[key] || input[key] === null) ? `${key} ` : `${key}="${input[key].toString()}" `;
  });

  return attributes;
};

module.exports = function register({ handlebars }) {
  return handlebars.registerHelper('attrs', attrsHelper);
};
exports.attrsHelper = attrsHelper;
