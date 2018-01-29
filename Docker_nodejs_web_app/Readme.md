### Creating Docker image for node.js web application

1. Build project with typescript, make sure it compiles.
```sh
> nmp run build
```

2. Building DockerImage
```sh
> docker build -t <optional-prefix>/node-web-app .
```

3. Start Docker Image
```sh
> docker run  -d -p 3000:8080 <optional-prefix>/node-web-app
```

4. [optional] Commit image to Docker repository
```sh
> docker push <optional-prefix>/node-web-app:latest
```
