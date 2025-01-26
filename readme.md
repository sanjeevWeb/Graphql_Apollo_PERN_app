## Graphql with Apollo Server Exploration with PERN stack and prisma ORM and dockerized it

worked on a simple todo app to get explore the behaviour of Graphql

As mentioned, Node with Typescript and express is used in backend, for database Postgresql
and Prisma ORM, React is used in frontend, finally dockerized the app locally

*folder structure*

![folder structure](image.jpg)

Initially got some issues with prisma engine when dockerizing it, but solved

![docker-compose](image.jpg)

*frontend in react*

![frontend](image.jpg)

>future scope

It was a crud operation but i wish to test it for operations like file upload
and real-time data sharing with its subscription (wss,sse,long polling) services
although i found that it responds slow sometimes , so there is a scope of optimization
of the app (may be).
