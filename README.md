## New react app

[![Netlify Status](https://api.netlify.com/api/v1/badges/f22f98eb-5d9c-4e6b-95a7-93cd2495f113/deploy-status)](https://app.netlify.com/sites/seasoned-react-app/deploys)

☝ Change this badge by editing `README.md` after cloning this repo

## Setup

#### Dependencies

- Node v8.10.0
- [yarn](https://yarnpkg.com/pt-BR/)

#### Clone this repository

```
$ git clone git@github.com:SeasonedSoftware/new-react-app.git
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

Your browser should automatically open at: `localhost:3000`.

---

### Checklist

- [ ] Change the image on `./public/favicon.png`.
- [ ] Start editing the content on the pages under `./src/pages/`, and creating new ones by adding new routes on `./src/App.js`
- [ ] Edit `./src/core/AuthRoute.js` if you want to change the way you handle protected routes.
- [ ] Add your global styles to `./src/index.css`. For styling your pages and components, use either `withStyles` from MaterialUI or emotion-css.

### All DONE!

- This project heavly relies on [Croods](https://croods-docz.netlify.com) and [Croods-auth](https://croods-docz.netlify.com) projects. Make sure you read their docs.
- If you want to add context providers for your whole app, edit the `./src/core/Providers.js` file.
- There are some built in components (`./src/components/*`), helpers (`./src/utils/helpers.js`) and hooks (`./src/utils/hooks.js`). Make sure you get to know them before you start rewriting them.
- If you want to enable/disable custom lint rules, edit the `.eslintrc.js` file.
- Don't forget to edit this `README.md` for your own needs.

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
