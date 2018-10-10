# bootstrap01
React + Redux + Redux-Observable + TypeScript + Less

A React.js (Webpack and Babel) boilerplate using - Redux, Rxjs (redux observable), TypeScript

## Requirement 

- npm install gulp -g

## Doubts

[Why using both?](https://css-tricks.com/combine-webpack-gulp-4/#article-header-id-14)

- **Gulp**: For handling static assets.
- **Webpack**: For rest of the tasks ;)

## Style

Considering this boilerplate to be used for single page appliation, `./app/src/styles/index.min.css` file deligates all the styles (in form of `[name].less` in each features) added in the project, in minified form. This file is generated (and updated) each time application is started. 

> To be noted: `gulp watch` is active in development when the application is started using `npm start`. So any changes to any [*].less file will be watched when the server is on.

