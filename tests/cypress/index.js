const handlebars = require('handlebars');
const attrsHelper = require('../../src/globals/handlebars/helpers/attrsHelper');
const elementHelper = require('../../src/globals/handlebars/helpers/elementHelper');

attrsHelper({ handlebars });
elementHelper({ handlebars });

const mount = (template, context) => {
  const document = cy.state('document');
  const html = `
    <head>
      <meta charset="UTF-8">
    </head>
    <body id="app"></body>
  `;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '../../../../css/carbon-components.css';

  document.write(html);
  document.head.appendChild(link);
  document.close();

  return new Promise((resolve, reject) => {
    cy.window().then(w => {
      document.getElementById('app').innerHTML = handlebars.compile(template)(context || {});

      resolve(document);
    });
  });
};

module.exports = {
  mount,
};
