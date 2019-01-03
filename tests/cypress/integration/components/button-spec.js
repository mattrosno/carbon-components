import get from 'lodash/get';
import { mount } from '../..';
import settings from '../../../../src/globals/js/settings';
import ButtonConfig from '@carbon/spec/components/button/button-config.js';
import ButtonTest from '@carbon/spec/components/button/button-test.js';

const mountComponent = demo => {
  const { prefix } = settings;
  const config = ButtonConfig(prefix);
  const context = get(config.demo, demo, { context: {} }).context;

  cy.readFile('src/components/button/button.hbs').then(template => {
    mount(template, context);
  });
};

ButtonTest(settings.prefix).run(mountComponent);
