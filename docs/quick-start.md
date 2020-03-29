# Quick Start

## Clone, install and run

Clone Angular-Starter-App repository into 'your-app-name':

```bash
git clone https://github.com/matsta25/angular-starter-app.git your-app-name
```

then go to the 'your-app-name' directory and install dependencies:

```bash
cd your-app-name
npm install
```

next launch the application:

```bash
npm run start
```

and in a new terminal tab launch mock api:

```bash
npm run mock
```

Now the app should be available on http://localhost:4200 and mock api on http://localhost:3000/posts.

## Rename project files

Next step is to change all 'angular-starter-app' strings to 'your-app-name' and so on...
For that you can use script or do it manually.

### Using script  {docsify-ignore}

Just type:

```bash
./cleanup.sh your-app-name
```

### Do it manually {docsify-ignore}

Lets do that manually using commands below, make sure to replace 'your-app-name':

```bash
find ./ -not -path "./node_modules/*" -type f -exec sed -i "s/angular-starter-app/your-app-name/g" {} + &&
echo "# your-app-name" >README.md &&
rm -rf ./docs &&
rm .gitlab-ci.yml &&
rm .travis.yml &&
rm -rf ./src/app/examples &&
sed "/ExamplesModule/d" -i ./src/app/core/core.module.ts &&
echo "This is home page!" > src/app/core/components/home/home.component.html &&
rm ./cleanup.sh
```

After that, you are have fresh and clean app which is ready for developing your features! :rocket:
