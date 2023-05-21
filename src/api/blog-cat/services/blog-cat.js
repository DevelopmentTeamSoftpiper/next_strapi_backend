'use strict';

/**
 * blog-cat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-cat.blog-cat');
