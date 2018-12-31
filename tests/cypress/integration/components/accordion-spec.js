import { mount } from '../..';
import settings from '../../../../src/globals/js/settings';
import Accordion from '../../../../src/components/accordion/accordion';
import AccordionConfig from '@carbon/spec/components/accordion/accordion-config.js';
import AccordionTest from '@carbon/spec/components/accordion/accordion-test.js';

const mountComponent = () => {
  const { prefix } = settings;
  const config = AccordionConfig(prefix);
  const accordion = config.generate();
  const context = config.demo.variants.default.context;

  cy.readFile('src/components/accordion/accordion.hbs').then(template => {
    mount(template, context).then(document => {
      let instance = new Accordion(document.querySelector('[data-accordion]'));
    });
  });
};

AccordionTest(settings.prefix).run(mountComponent);
