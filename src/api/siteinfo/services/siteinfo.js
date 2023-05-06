'use strict';

/**
 * siteinfo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::siteinfo.siteinfo');
