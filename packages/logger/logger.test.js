'use strict';

const logger = require('./logger');

describe('logger', ()=> {
  it('happy path', ()=> {
    logger.trace('trace');
    logger.debug('debug');
    logger.info('info');
    logger.warn('warn');
    logger.error('error');
    logger.fatal('fatal');
  });
});
