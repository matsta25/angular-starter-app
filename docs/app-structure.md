# App structure

## App directory tree {docsify-ignore}

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
│   │       │       ├── notification.component.html
│   │       │       ├── notification.component.scss
│   │       │       └── notification-bar.component.ts
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
│   ├── scss
│   │   ├── abstracts
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── base
│   │   │   ├── _base.scss
│   │   │   ├── _fonts.scss
│   │   │   ├── _helpers.scss
│   │   │   └── _typography.scss
│   │   ├── components
│   │   │   └── _snackbar.scss
│   │   ├── layout
│   │   │   ├── _footer.scss
│   │   │   └── _header.scss
│   │   ├── main.scss
│   │   ├── pages
│   │   │   └── _home.scss
│   │   ├── themes
│   │   │   └── _default.scss
│   │   └── vendors
│   │       ├── _bootstrap.scss
│   │       ├── _googlefonts.scss
│   │       └── _material.scss
│   ├── styles.scss
│   └── test.ts
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── proxy.conf.json
└── tslint.json
```
