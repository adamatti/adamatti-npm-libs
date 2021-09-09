'use strict';

module.exports = {
  hooks: {
    'pre-commit': 'concurrently -n "lint,test" "yarn lint" "yarn test"',
  }
};
