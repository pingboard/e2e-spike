# Pingboard E2E Tests
_Pingboard e2e tests written in [Testcafe](https://devexpress.github.io/testcafe/)_

## Setup:
* `git clone git@github.com:pingboard/e2e-spike.git`
* `npm i` to install the project dependencies
* search 1Password for `roles.js` and download/copypasta the file into `data/roles.js`

## Running Tests
* all on chrome: `npm test`
* list various runners: `npm run`
* Specify environment: `./node_modules/.bin/testcafe chrome tests/ --env=https://isis.pingboardbeta.com`

## Browserstack
* set BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY env vars ([from browserstack](https://automate.browserstack.com/dashboard))
* get available browser list: `./node_modules/.bin/testcafe -b browserstack`
* run 'em: `./node_modules/.bin/testcafe "browserstack:Chrome@53.0:Windows 10" tests/`

## Crossbrowsertesting (alternative to Browserstack)
* set CBT_TUNNELS_USERNAME and CBT_TUNNELS_AUTHKEY env vars ([from Crossbrowsertesting](https://app.crossbrowsertesting.com/selenium/run))
* get available browser list: `./node_modules/.bin/testcafe -b crossbrowsertesting`
* run 'em: `./node_modules/.bin/testcafe "crossbrowsertesting:Chrome" tests/`

