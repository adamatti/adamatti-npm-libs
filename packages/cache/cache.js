'use strict';

const cacheProvider = () => {
  const cacheTable = {};

  const cache = async (key, fn) => {
    if (!cacheTable[key]) {
      cacheTable[key] = await fn();
    }
    return cacheTable[key];
  };

  return {
    cache,
  };
};

module.exports = cacheProvider;
