## PayNow - Admin

[![Maintainability](https://api.codeclimate.com/v1/badges/4ecd8bc655c16cde3bb7/maintainability)](https://codeclimate.com/repos/5bd75040641e304cc90093db/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4ecd8bc655c16cde3bb7/test_coverage)](https://codeclimate.com/repos/5bd75040641e304cc90093db/test_coverage) [![CircleCI](https://circleci.com/gh/SeasonedSoftware/paynow-admin.svg?style=svg)](https://circleci.com/gh/SeasonedSoftware/paynow-admin)

## Installation

#### Dependencies

Node v8.10.0

[yarn](https://yarnpkg.com/pt-BR/)

#### Clone the repository
```
$ git clone git@github.com:SeasonedSoftware/paynow-admin.git
$ cd paynow-admin
```

#### Install dependencies
```
$ yarn
```

#### Run the server
```
$ yarn start
```

You can check that it worked by browsing `localhost:3000`.

## Tests

#### Running tests
```
$ yarn test
```

#### Running tests with coverage report
```
$ yarn test --coverage
```

The coverage will be available on the `coverage/` folder. Open `coverage/lcov-report/index.html` on your browser to see details.


#### Running the linter
```
$ yarn lint
```

## Deployment

#### Staging

Merging to the `master` branch will  automatically deploy to Netlify.

#### Production

To be added
