# What is this?

This is a simple react app, that flips a die and return the scores for a certain player.

### This application is using

- React.js
- React-Redux
- Redux
- Material-ui
  - icons
  - lab
  - core

### Installation of `redux` and `react-redux` via `npm`:

```
$npm i react-redux redux
```

### Installation of `redux` and `react-redux` via `yarn`:

```
$yarn add react-redux
$yarn add redux
```

### Installation of `material-ui` `icons` `lab` `core` via `npm`:

```
$npm i @material-ui/icons @material-ui/lab @material-ui/core
```

### Installation of `material-ui` `icons` `lab` `core` via `yarn`:

```
$yarn add @material-ui/icons @material-ui/lab @material-ui/core
```

### Clone this repository using the following command:

`$ git clone [URL to this repository]`

### Navigate to the project folder of this app by running the following command:

`$ cd dice-game-react-app`

### Install the dependencies by running the following command:

`$ npm install`

### Then:

`$ npm start or npm run start`

## Deploying an app on firebase.

##### Firstly you need to install `firebase-tools` globally by running:

`$ npm install -g firebase-tools`

##### Then

Create a firebase app in the [firebase console](https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fconsole.firebase.google.com%2Fu%2F0%2F&followup=https%3A%2F%2Fconsole.firebase.google.com%2Fu%2F0%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin) and register the app for hosting.

##### Then

##### Authenticate with firebase by running the following command:

`$ firebase login`

The browser window will pop up authenticate and go back to the cmd

##### Then

##### Run the following command

`firebase init`
Follow the following procedures

```
1. ? Are you ready to proceed? (Y/n) y
2. >(*) Hosting: Configure and deploy Firebase Hosting sites - navigate with the arrows and click space to select then hit enter
3. > Use an existing project - hit enter
4. Navigate to your project name that you used to register in the firebase console and hit enter
5. ? What do you want to use as your public directory? build  - the default is public rename it to build like so.
6. ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
7. The github part is optional
```

##### Then

##### Run the following command before deploying the app this is very important

`npm run build`

##### Finally

##### Run the following command

`firebase deploy`
Then you will be provided with a url visit that URL then all its done

### The react development server will start listening on port 3000 click the following URL:

URL: [test application](http://localhost:3000)

## For the hosted version of this application you don't need to install anything just click the following URL

URL: [test application online](https://dice-game-react.web.app)

## Why this simple application?

This application was created for development and practice purposes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
