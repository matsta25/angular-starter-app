## Docker {docsify-ignore}

##### Description

In root of this project you can find **`docker-compose.yml`**, and **`Dockerfile`**.
Dockerfile is using **`nginx.conf`**.

##### Usage
 
Using docker-compose:
```bash
    docker-compose up --build
```

OR using Dockerfile, do build and run:

```bash
    docker build -t angular-starter-app-image .
```

```bash
    docker run --name your-app-name-container -d -p 80:80 your-app-name-image
```

After that your app should be available at http://localhost.
