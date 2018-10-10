# React-RxJs boilerplate

A minimal boilerplate to reactive programming using `react.js`, `redux`, `redux-observable (RxJs)`, `Typescript`. Implementing : (**action**, **epic**, **selectors** and **reducers**)

## Setup 

- npm install
- npm install gulp -g

## Packages used

- React.js
- Redux (react-redux)
- redux-observable (RxJs)
- Typescript
- Less
- **Gulp**: For handling static assets.
- **Webpack**: For rest of the tasks ;)

## Style

Considering this boilerplate to be used for single page appliation, `./app/src/styles/index.min.css` file deligates all the styles (in form of `[name].less` in each features) added in the project, in minified form. This file is generated (and updated) each time application is started. 

> To be noted: `gulp watch` is active in development when the application is started using `npm start`. So any changes to any [*].less file will be watched when the server is on.

