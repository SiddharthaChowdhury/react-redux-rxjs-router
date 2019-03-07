# React-RxJs boilerplate

A minimal boilerplate to reactive programming using `react.js`, `redux`, `redux-observable (RxJs)`, `Typescript`. Implementing : (**action**, **epic**, **selectors** and **reducers**)

## Setup 

- npm install

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
- Scss
- **Webpack**: For rest of the tasks ;)
- Jest (testing)


## Test

We're using [Jest](https://jestjs.io/docs/en/tutorial-async) by facebook, as it's popular among React.js community, also because it is easy, well documented and does the job! 

Use `npm test` or `npm t` to run example test.

##TODO: Fix warning on building app -

    WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
    This can impact web performance.
    Assets: 
      build.js (264 KiB)
    
    WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
    Entrypoints:
      main (264 KiB)
          build.js
          style.css
    
    
    WARNING in webpack performance recommendations: 
    You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
    For more info visit https://webpack.js.org/guides/code-splitting/
