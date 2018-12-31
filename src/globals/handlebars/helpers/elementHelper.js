const { SafeString } = require('handlebars');

/**
 * Handlebars helper to set a dynamic element type
 *
 * @param {string} type - element type
 * @returns {string} the Handlebars element string
 */
const elementHelper = (type = 'div') => new SafeString(`${type}`);

module.exports = function register({ handlebars }) {
  return handlebars.registerHelper('element', elementHelper);
};
exports.elementHelper = elementHelper;
