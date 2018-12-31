'use strict';

const featureFlags = require('../../globals/js/feature-flags');
const { flattenDemosObject } = require('../../globals/js/misc/flatten-demos');
const { prefix } = require('../../globals/js/settings');
const accordionConfig = require('@carbon/spec/components/accordion/accordion-config.js')(prefix);

module.exports = {
  context: {
    featureFlags,
  },
  variants: flattenDemosObject(accordionConfig.demo),
};
