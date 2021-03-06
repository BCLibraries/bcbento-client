This is a front-end client for the Boston College Libraries bento search. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Development

#### Prerequisites

* [NodeJS](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/lang/en/docs/install/)

#### Installing

```bash
git clone https://github.com/BCLibraries/bcbento-client.git
cd bcbento-client
yarn install
```

#### Supported features

 `create-react-app` provides support for ES6 syntax plus [a number of other Javascript
 features](https://facebook.github.io/create-react-app/docs/supported-browsers-features).
 
All modern browsers are supported. Support for IE11 is provided by a polyfill.

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

See the `create-react-app` documentation on [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

See the `create-react-app` documentation on [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploying

Deploying the application consists of building the app, copying the deployed assets into Pelican, and updating the 
script sources in the Pelican template to match the new generated Javascript.

1. Run `yarn build`
2. Copy the contents of the build directory to the `/themes/bc/static/bcbento`.
3. Replace the `<script>` tags in `/themes/bc/templates/search/index.html` with the corresponding versions in the
 `index.html` file generated by the build script.
 
The rest of deployment is handled using the regular Pelican workflow.

### Environments

`yarn build` always builds for the production environment. To build a version with environment variables from the 
development or staging environments, create a `.env.production.local` or `.env.staging.local` file to override
the values configured in `.env`.

See the `create-react-app` documentation on [environments](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)
for more information.