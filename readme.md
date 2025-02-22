## Graphql with Apollo Server Exploration with PERN stack and prisma ORM and dockerized it

worked on a simple todo app to get explore the behaviour of Graphql

As mentioned, Node with Typescript and express is used in backend, for database Postgresql
and Prisma ORM, React is used in frontend, finally dockerized the app locally

*folder structure*

![folderStr](https://github.com/user-attachments/assets/b2fce5fa-aac5-4139-869a-9fc6574990bd)

GraphQl-Apollo server response in browser(sandbox)
![graphql_response](https://github.com/user-attachments/assets/c9995603-351c-4176-a57e-0336fb6f938b)

Initially got some issues with prisma engine when dockerizing it, but solved. Actually the issue was that prisma was
not supported for windows on docker as it was meant for Linux, so to overcome this, first copy prisma file explicitly in 
Dockerfile abd secondly update prisma.schema file as - 
```
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "darwin", "darwin-arm64","debian-openssl-3.0.x"]
}
```
and finally run -
```
npx prisma generate
```

![docker-compose](image.j![docer_compose1](https://github.com/user-attachments/assets/e182afb7-bafe-4dec-90c2-9ee2287c7a52)
pg)
![docker_images](https://github.com/user-attachments/assets/4b53888b-cb26-4bda-9398-2dd5a9918410)

*frontend in react*

![frontend_graphql](https://github.com/user-attachments/assets/1a920971-16ab-4728-b208-b4a7ac08bd5e)


>future scope

It was a crud operation but i wish to test it for operations like file upload
and real-time data sharing with its subscription (wss,sse,long polling) services
although i found that it responds slow sometimes , so there is a scope of optimization
of the app (may be).
