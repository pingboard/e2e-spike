# Pingboard E2E Tests
_Pingboard e2e tests written in [Protractor](http://www.protractortest.org)_

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `git clone git@github.com:qualityshepherd/protractor-example.git`
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)
* run with flake `./flake conf.js`
* run on saucelabs`./flake sauceConf.js` (add your username/key)

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
