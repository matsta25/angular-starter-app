<h1> project under maintenance</h1>

<p align="center">
    <a href="https://matsta25.gitlab.io/angular-starter-app/docs/">
        <img src="https://raw.githubusercontent.com/matsta25/angular-starter-app/master/src/assets/logo.svg?sanitize=true" alt="Angular Starter App" height="350px">
    </a>
</p>
    
<h2 align="center">Angular Starter App</h2>

<p align="center">
    <a href="https://travis-ci.org/github/matsta25/angular-starter-app"><img src="https://travis-ci.org/matsta25/angular-starter-app.svg?branch=master" alt="TravisCi Build Status"/></a>
    <a href="https://www.codefactor.io/repository/github/matsta25/angular-starter-app"><img src="https://www.codefactor.io/repository/github/matsta25/angular-starter-app/badge" alt="CodeFactor" /></a>
    <!---
        TODO: add custom badge below: 'pipeline' => 'docs'
        https://medium.com/@iffi33/adding-custom-badges-to-gitlab-a9af8e3f3569
    --->
    <a href="https://gitlab.com/matsta25/angular-starter-app/-/commits/master"><img alt="pipeline status" src="https://gitlab.com/matsta25/angular-starter-app/badges/master/pipeline.svg?job=docs" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT badge"/></a>
</p>

Angular Starter App is real word boilerplate to speedup your development. 
Just focus on your main features and dont waist your time on setting up the whole necessary angular environment.

> If you are interested of contributing, go to [CONTRIBUTING](https://github.com/matsta25/angular-starter-app/blob/master/CONTRIBUTING.md) to make this project more awesome! :sunglasses:

## Why Angular Starter App?

Using this starter you will save a lot of hours and this will make sure that you are creating your app following the best practise. 

## Features

   - Highly scalable folder structure (core & shared module)
   - Installed and plugged ngrx (store, effects, devtools), Angular Material and Bootstrap
   - Lazy loading feature
   - Notifications 
   - Offline indicator
   - Http err handing
   - Mock api (json-server)
   - Loading bar
   - Localstorage
   - Multi env. files
   - Configured tslint rules
   - Docker and docker-compose
   - Proxy
   - etc.

## Live Demo

StackBlitz is available - [HERE](https://stackblitz.com/github/matsta25/angular-starter-app) :fire: !

App demo is available - [HERE](https://matsta25.github.io/angular-starter-app) :fire: !

## Getting Started

<p align="center">
    <a href="https://matsta25.gitlab.io/angular-starter-app/docs/#/quick-start">
        <img src="https://raw.githubusercontent.com/matsta25/angular-starter-app/master/quick-start-demo.svg?sanitize=true" alt="Angular Starter App">
    </a>
    <sup>* dont forget to run mock using `npm run mock` in another bash tab.</sup>
</p>

**Check out documentation - [HERE](https://matsta25.gitlab.io/angular-starter-app/docs/) :scroll: !**

## App structure


```bash
├── mock
│   ├── index.js
│   └── routes.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── core
│   │   │   ├── app-store
│   │   │   │   ├── app-store.effects.ts
│   │   │   │   ├── app-store.reducers.ts
│   │   │   │   └── app-store.state.ts
│   │   │   ├── components
│   │   │   │   ├── footer
│   │   │   │   ├── header
│   │   │   │   ├── home
│   │   │   │   └── page-not-found
│   │   │   └── core.module.ts
│   │   ├── features
│   │   │   └── posts
│   │   │       ├── components
│   │   │       │   └── posts
│   │   │       │       ├── posts.component.html
│   │   │       │       ├── posts.component.scss
│   │   │       │       └── posts.component.ts
│   │   │       ├── models
│   │   │       │   └── post.model.ts
│   │   │       ├── posts.module.ts
│   │   │       ├── posts-routing.module.ts
│   │   │       ├── services
│   │   │       │   └── posts.service.ts
│   │   │       └── store
│   │   │           ├── posts.actions.ts
│   │   │           ├── posts.effects.ts
│   │   │           ├── posts.reducer.ts
│   │   │           ├── posts.selectors.ts
│   │   │           └── posts.state.ts
│   │   └── shared
│   │       ├── components
│   │       │   └── notification
│   │       ├── interceptors
│   │       │   ├── index.ts
│   │       │   └── message.interceptor.ts
│   │       ├── material.module.ts
│   │       ├── models
│   │       │   ├── http-response-model.model.ts
│   │       │   ├── local-storage-key.model.ts
│   │       │   └── snackbar.model.ts
│   │       ├── services
│   │       │   ├── error-handler.service.ts
│   │       │   ├── error.service.ts
│   │       │   ├── local-storage.service.ts
│   │       │   ├── logger.service.ts
│   │       │   └── notification-bar.service.ts
│   │       ├── shared.module.ts
│   │       └── store
│   │           ├── shared.actions.ts
│   │           ├── shared.effects.ts
│   │           ├── shared.reducer.ts
│   │           ├── shared.selectors.ts
│   │           └── shared.state.ts
│   ├── environments
│   │   ├── environment.one.ts
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   │   └── environment.two.ts
│   ├── styles.scss
│   └── test.ts
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── proxy.conf.json
└── tslint.json
```

## Contributing

Want to file a bug, contribute some code, or improve documentation? Excellent!

Read up on guidelines for [CONTRIBUTING](https://github.com/matsta25/angular-starter-app/blob/master/CONTRIBUTING.md).

## Contributors

This project exists thanks to all these people :muscle: :

[//]: contributor-faces

<a href="https://github.com/matsta25"><img src="https://avatars2.githubusercontent.com/u/32844571?v=4" title="matsta25" width="80" height="80"></a>
<a href="https://github.com/cichy380"><img src="https://avatars2.githubusercontent.com/u/5628124?&v=4" title="cichy380" width="80" height="80"></a>

## License

Everything in this repository is [licensed under the MIT License][license] unless otherwise specified.

Copyright (c) 2020 [Mateusz Stanczak]

[license]: https://github.com/matsta25/angular-starter-app/blob/master/LICENSE
[Mateusz Stanczak]: https://github.com/matsta25
