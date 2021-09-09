'use strict';

const cacheProvider = () => {
  const cacheTable = {};

  const cache = async (key, fn) => {
    if (!cacheTable[key]) {
      cacheTable[key] = await fn();
    }
    return cacheTable[key];
  };

  const fakeFeature1 = ()=> {};

  return {
    cache,
    fakeFeature1,
  };
};

module.exports = cacheProvider;
