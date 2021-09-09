'use strict';

const doLog = (level) => {
  return (...args) => {
    console.log(`${new Date().toUTCString()} ${level} - `, ...args);
  };
};

const logger = {
  trace: doLog('trace'),
  debug: doLog('debug'),
  info: doLog('info'),
  warn: doLog('warn'),
  error: doLog('error'),
  fatal: doLog('fatal'),
};

// TODO implement
logger.child = () => logger;

module.exports = logger;
