<h1> project under maintenance</h1>

<p align="center">
    <img src="https://raw.githubusercontent.com/matsta25/angular-starter-app/master/src/assets/logo.svg?sanitize=true" alt="Angular Starter App" height="350px">
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
   - Scss file structure (Sass 7-1 Pattern)
   - Offline indicator
   - Http err handing
   - Mock api (json-server)
   - Loading bar
   - Localstorage
   - Multi env. files
   - Configured tslint rules
   - Docker and docker-compose templates
   - Proxy
   - etc.

## Live Demo

StackBlitz is available - [HERE](https://stackblitz.com/github/matsta25/angular-starter-app) :fire: !

App demo is available - [HERE](https://matsta25.github.io/angular-starter-app) :fire: !

## Getting Started

Check out official documentation - [HERE](https://matsta25.gitlab.io/angular-starter-app/docs/) :scroll: !

<!---
    TODO: add ## Examples
--->

## Contributing

Want to file a bug, contribute some code, or improve documentation? Excellent!

Read up on guidelines for [CONTRIBUTING](https://github.com/matsta25/angular-starter-app/blob/master/CONTRIBUTING.md).

## Contributors

This project exists thanks to all these people :muscle: :

[//]: contributor-faces

<a href="https://github.com/matsta25"><img src="https://avatars2.githubusercontent.com/u/32844571?v=4" title="matsta25" width="80" height="80"></a>

## License

Everything in this repository is [licensed under the MIT License][license] unless otherwise specified.

Copyright (c) 2020 [Mateusz Stanczak]

[license]: https://github.com/matsta25/angular-starter-app/blob/master/LICENSE
[Mateusz Stanczak]: https://github.com/matsta25

<!---

##### Mock feature (json-server):
1. Run:
```
    npm run mock
```

INFO:
API is available on http://localhost:3000/api/posts and http://localhost:3000/posts.
API is serving data created with faker.js.
To add more fake data just edit mock/index.js :)

##### Docker feature:

1. Using docker-compose:
```
    docker-compose up --build
```

2. Alternatively using docker:
build: 
```
    docker build -t angular-starter-app-image .
```

run
```
    docker run --name angular-starter-app-container -d -p 80:80 angular-starter-app-image
```

INFO:
Site is available at http://localhost.
Dockerfile is using nginx.conf.

##### Multi environment conf feature:

For env/developer one:
```
    npm run start:one
```

For env/developer two:
```
    npm run start:two
```

INFO:
Package is available with 2 additional different environments e.g like developers. 

#####  TODO list

 *  [x] project files structure
 *  [x] core module
 *  [x] shared module
 *  [x] angular material
 *  [x] bootstrap
 *  [x] scss file structure
 *  [x] lazy loading
 *  [x] mock
 *  [x] multi env
 *  [x] ngrx store
 *  [x] ngrx effects
 *  [x] ngrx devtools
 *  [x] tslint
 *  [x] localstorage
 *  [x] notification
 *  [x] online notification
 *  [x] docker compose
 *  [x] docker file
 *  [x] slim bar loading
 *  [x] custom snackbar with x icon
 *  [x] console log easter egg
 *  [x] stackblitz 
 *  [x] interceptor err notification 
 *  [x] .editorconfig
 *  [x] .github/issue_template
 *  [x] .github/pull_request_template
 *  [x] proxy
 *  [ ] root component for feature module
 
 *  [x] github corner
 *  [ ] docs
 *  [ ] readme gif
 *  [ ] project tree

 
 *  [ ] ?font fix when offline
 *  [ ] ?spinner when loading
 *  [ ] ?shared NgRx isLoading/err - ? USELESS IF USING PROGRESSBAR
 *  [ ] ?group docker docker-compose nginx.conf files - into new dir?
 *  [ ] i18n?
 *  [ ] PWA?
 *  [ ] ?ngrx entity - TO MUCH 'blech'
 *  [ ] ?table pagination async
 
 - select color template - https://colorsinspo.com/:
 gray - #40514e
 blue - #2f89fc
 green - #30e3ca
 white - #f5f5f5
 - contribution nice table
 - licence
 - contribution rules
 - color sh - https://asciinema.org/
 - tslint , EOL
-->
