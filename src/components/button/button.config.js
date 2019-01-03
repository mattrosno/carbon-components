'use strict';

const featureFlags = require('../../globals/js/feature-flags');
const { flattenDemosObject } = require('../../globals/js/misc/flatten-demos');
const { prefix } = require('../../globals/js/settings');
const buttonConfig = require('@carbon/spec/components/button/button-config.js')(prefix);

module.exports = {
  default: 'primary',
  context: {
    featureFlags,
  },
  variants: flattenDemosObject(buttonConfig.demo),
};
