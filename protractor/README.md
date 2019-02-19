# Pingboard E2E Tests
_Pingboard e2e tests written in [Protractor](http://www.protractortest.org)_

## Setup:
* `git clone git@github.com:pingboard/e2e-spike.git`
* `npm i` to install the project dependencies
* search 1Password for `e2e` and past the json in `data/users.js`

## Run tests:
* `npm test`

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
