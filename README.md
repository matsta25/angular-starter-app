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
    <sup>* dont forget to run mock using **`npm run mock`** in another bash tab.</sup>
</p>

Check out documentation - [HERE](https://matsta25.gitlab.io/angular-starter-app/docs/) :scroll: !

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
#####  TODO list

 *  [x] project files structure
 *  [x] core module
 *  [x] shared module
 *  [x] angular material
 *  [x] bootstrap
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
 *  [x] root component for feature module
 *  [x] form example
 *  [x] crud with ngrx
 *  [x] update list after delete
 *  [x] redirect when update/add new post
  
 *  [x] github corner
 *  [x] docs
 *  [x] project tree

 *  [x] href to logo
 *  [x] readme gif/ascii bash

TODO TO MVP:

 *  [ ] add basic styling with good practise (MARCIN TO NAJLEPSZY FRONTENDOWIEC JAKIEGO ZNAM I NA 100% ZROBI MI TO ZADANKO XD )
 *  [ ] add more description to docs, like err handler, when err is displayed etc 
 *  [ ] clean.sh add -> rm docs:start from package.json and docs dir 
 *  [x] clean.sh add -> add deleting db.json
 *  [x] clean.sh add -> add quick-start-demo.svg
 *  [ ] add private/public everywhere + structure code blocks

AT THE END:

 *  [ ] add file tree on readme & update tree in docs
 *  [ ] update docs clean manually section from clean.sh


I DONT KNOW:

 *  [ ] ?add form validation
 *  [ ] ?add notification when add or update(backend message)
 
 *  [ ] ?font fix when offline
 *  [ ] ?spinner when loading
 *  [ ] ?shared NgRx isLoading/err - ? USELESS IF USING PROGRESSBAR
 *  [ ] ?group docker docker-compose nginx.conf files - into new dir?
 *  [ ] i18n?
 *  [ ] PWA?
 *  [ ] ?ngrx entity - TO MUCH 'blech'

 
 gray - #40514e
 blue - #2f89fc
 green - #30e3ca
 white - #f5f5f5
-->
