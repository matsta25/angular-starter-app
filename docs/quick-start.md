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

and in a new terminal tab launch mock Api:

```bash
npm run mock
```

Now app should be available on http://localhost:4200 and mock Api on http://localhost:3000/posts.

## Rename project files

Next step is to change all 'angular-starter-app' to 'your-app-name'.
For that you can use script or do it manually step by step.

### Automation

```bash
./cleanup.sh your-app-name
```



### Manually
Lets do that using this command:

```bash
find . -type f -exec sed -i 's/angular-starter-app/your-app-name/g' {} +
```

clear README.md:

```bash
echo "# your-app-name" > README.md
```
