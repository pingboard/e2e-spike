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