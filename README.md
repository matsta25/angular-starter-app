
<p align="center">
    ![Angular Starter App](https://raw.githubusercontent.com/matsta25/angular-starter-app/master/src/assets/logo.svg?sanitize=true)
    #Angular Starter App
</p>


[![Build Status](https://travis-ci.org/matsta25/angular-starter-app.svg?branch=master)](https://travis-ci.org/matsta25/angular-starter-app)
[![CodeFactor](https://www.codefactor.io/repository/github/matsta25/angular-starter-app/badge)](https://www.codefactor.io/repository/github/matsta25/angular-starter-app)


Checkout [DEMO](https://matsta25.github.io/angular-starter-app)
StackBlitz [HERE](https://stackblitz.com/github/matsta25/angular-starter-app)

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
