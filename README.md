# New_React_App

[![Netlify Status](https://api.netlify.com/api/v1/badges/f22f98eb-5d9c-4e6b-95a7-93cd2495f113/deploy-status)](https://app.netlify.com/sites/seasoned-react-app/deploys)

☝ Change this badge by editing `README.md` after cloning this repo

## Setup

#### Dependencies

- Node v11.1.0
- [yarn](https://yarnpkg.com/pt-BR/)

#### Clone this repository

```
$ git clone git@github.com:SeasonedSoftware/new-react-app.git $$your-project-name$$
$ cd new-react-app
```

#### Install dependencies

```
$ yarn
```

#### Set up some configs

Run the following command and follow the instructions on terminal:

```
$ yarn scaffold
```

It will initiate your website's title and will create the `.env` and `.env.local` files

#### Run the server

```
$ yarn start
```

## Setup using Docker

#### Clone this repository

```
$ git clone git@github.com:SeasonedSoftware/new-react-app.git $$your-project-name$$
$ cd new-react-app
```

#### Install dependencies

```
$ docker-compose run front yarn
```

#### Set up some configs

Run the following command and follow the instructions on terminal:

```
$ docker-compose run front yarn scaffold
```

It will initiate your website's title and will create the `.env` and `.env.local` files

#### Run the server

```
$ docker-compose up
```

Your browser should automatically open at: `localhost:3000`.

---

### All DONE!

- This project heavly relies on [Croods](https://croods-docz.netlify.com) and [Croods-auth](https://croods-docz.netlify.com) projects. Make sure you read their docs.
- If you want to add context providers for your whole app, edit the `./src/core/Providers.js` file.
- There are some built in helpers (`./src/utils/helpers.js`) and hooks (`./src/utils/hooks.js`). Make sure you get to know them before you start rewriting them.
- If you want to enable/disable custom lint rules, edit the `.eslintrc.js` file.

---

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

Create a new Website on Netlify from this project's repo (master branch) with default configuration.

#### Production

Merging to `master` branch will automatically deploy to Netlify.
