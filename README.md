# NgxStarterTemplate

<!--- TODO: more badges --->
[![Build Status](https://travis-ci.org/matsta25/ngx-starter-template.svg?branch=master)](https://travis-ci.org/matsta25/ngx-starter-template)

<!--- TODO: logo ---> 

Checkout [DEMO](https://matsta25.github.io/ngx-starter-template)

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
    docker build -t ngx-starter-template-image .
```

run
```
    docker run --name ngx-starter-template-container -d -p 80:80 ngx-starter-template-image
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

 *  [ ] project files structure
 *  [x] core module
 *  [x] shared module
 *  [x] angular material
 *  [x] bootstrap
 *  [ ] scss file structure
 *  [x] lazy loading
 *  [x] mock
 *  [x] multi env
 *  [x] ngrx store
 *  [x] ngrx effects
 *  [x] ngrx devtools
 *  [ ] ngrx entity
 *  [ ] table pagination async
 *  [x] tslint
 *  [x] localstorage
 *  [x] notification
 *  [x] online notification
 *  [x] docker compose
 *  [x] docker file
 *  [x] slim bar loading
 *  [x] custom snackbar with x icon
 *  [x] console log easter egg
 *  [ ] readme gif
 *  [ ] project tree
 *  [ ] stackblitz
 
 *  [ ] font fix when offline
 *  [ ] ?shared NgRx isLoading/err - ? USELESS IF USING PROGRESSBAR
 *  [ ] ?group docker docker-compose nginx.conf files - into new dir?
 *  [ ] proxy?
 *  [ ] i18n?
 *  [ ] PWA?
 
 - select color template - https://colorsinspo.com/
 - contribution nice table
 - licence
 - contribution rules
 - color sh - https://asciinema.org/
