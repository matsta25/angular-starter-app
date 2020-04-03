# Quick Start

## Clone to your-app-name dir

Clone Angular-Starter-App repository into 'your-app-name':

```bash
git clone https://github.com/matsta25/angular-starter-app.git your-app-name
```

then go to the 'your-app-name' directory:

```bash
cd your-app-name
```

## Rename project files

Next step is to change all 'angular-starter-app' strings to 'your-app-name' and so on...
For that you can use script or do it manually.

### Using script  {docsify-ignore}

Just type:

```bash
./cleanup.sh your-app-name
```

## Install dependencies

Now its time to install dependencies:

```bash
npm install
```

## Run app and mock

next launch the application:

```bash
npm run start
```

and in a new terminal tab launch mock api:

```bash
npm run mock
```

Now the app should be available on http://localhost:4200 and mock api on http://localhost:3000/posts.

After that, you are have fresh and clean app which is ready for developing your features! :rocket:
