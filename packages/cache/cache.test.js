'use strict';

const cacheProvider = require('./cache');

describe('cache', ()=> {
  let cache;

  beforeEach(()=> {
    cache = cacheProvider();
  });

  it('happy path', async ()=> {
    const fn = jest.fn(()=> 'result');
    const key = 'fakeKey';

    let result = await cache.cache(key, fn);
    expect(result).toEqual('result');
    expect(fn).toBeCalledTimes(1);

    result = await cache.cache(key, fn);
    expect(result).toEqual('result');
    expect(fn).toBeCalledTimes(1);
  });
});

describe("invalid test", ()=> {
  it("1+1", ()=> {
    expect(1+1).toEqual(3);
  })
})