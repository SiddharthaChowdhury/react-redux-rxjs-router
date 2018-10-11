# React-RxJs boilerplate

A minimal boilerplate to reactive programming using `react.js`, `redux`, `redux-observable (RxJs)`, `Typescript`. Implementing : (**action**, **epic**, **selectors** and **reducers**)

## Setup 

- npm install
- npm install gulp -g

## Overview 

File structure is "Feature/Domain-style" -  separate folders per feature.

This setup is fairly straight forward for those who are aware of [RxJs](https://rxjs-dev.firebaseapp.com) and [React - Redux](https://redux.js.org/basics/usagewithreact). Also for those who dont know [RxJs](https://rxjs-dev.firebaseapp.com) but familiar with [React - Redux](https://redux.js.org/basics/usagewithreact), going through Rxjs and [redux-observable](https://redux-observable.js.org) documentations (for brief understanding) should make you comfortable. But for those who are not aware of either of those, then I think its better if you can grasp some knowledge of [React - Redux](https://redux.js.org/basics/usagewithreact) and [RxJs](https://rxjs-dev.firebaseapp.com) first.

### Given EXAMPLE

This boilerplate is bundled with a simple example of - "button click and display change" and not "Hello World!" example, as would be fairly simple for this kind of setup. There was a need of putting an examples which uses the underlying concepts of reactive programming using [**React - Redux**](https://redux.js.org/basics/usagewithreact) and [**redux-observable**](https://redux-observable.js.org) THE - "Action, Epic, Selecor, Reducer".

## Packages overview

- React.js
- Redux (react-redux)
- redux-observable (RxJs)
- Typescript
- Less
- **Gulp**: For handling static assets.
- **Webpack**: For rest of the tasks ;)
- Jest (testing)


## Style

We are using [Less](http://lesscss.org) preprocessor by default, as it is most widely used and pretty simple. We're using [Gulp](https://gulpjs.com) to convert all the `*.less` files into `*.css` as Gulp is better when it comes to handling static assets, also because it is very easy to understand and use. 
Considering this boilerplate to be used for single page appliation, `./app/src/styles/index.min.css` file deligates all the styles (in form of `[name].less` in each features) useed in the project. This file is generated (and updated) each time application is started. 

> To be noted: `gulp watch` is active in development when the application is started using `npm start`. So any changes to any [*].less file will be watched when the server is on.

**Change to [Sass](https://sass-lang.com)?** 

1. Install [gulp-sass](https://www.npmjs.com/package/gulp-sass) `npm install gulp-sass --save-dev`
2. Change file type of `./app/src/index.less` to `./app/src/index.scss`
3. Open `./gulpfile.js` and make the necessary changes according to the [documentation](https://www.npmjs.com/package/gulp-sass)
4. And don't forget to check the `"scripts"` part of the `.\package.json` file.

## Test

We're using [Jest](https://jestjs.io/docs/en/tutorial-async) by facebook, as it's popular among React.js community, also because it is easy, well documented and does the job! 

Use `npm test` or `npm t` to run example test.
