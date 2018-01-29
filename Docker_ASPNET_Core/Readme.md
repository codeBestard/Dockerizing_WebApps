### Creating Docker image for ASP.NET Core application

1. In Visual Studio, Add `` Docker Support`` to project that will generate docker_compose project and Dockerfile.

2. Building Docker Image using docker-compose
```sh
> docker-compose build
```

3. Start Docker Image
```sh
> docker run --rm -d -p 3333:80 <optional-prefix>/myshop
```

4. [optional] Commit image to Docker repository
```sh
> docker push <optional-prefix>/myshop:latest
```
