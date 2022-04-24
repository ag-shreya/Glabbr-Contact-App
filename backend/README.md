# Backend Configuration

1. To start up run the following commands (requirement: docker -- to create instance of db and pgadmin )

```sh
  npm run start:dev:db  # to create instance of db
  npm run start:dev     # to run the server
```

2. To Open the pgadmin for this application
   - [localhost](http://localhost:82/browser/)
   - email: user@domain.local \
     password: postgresmaster
   - DB setup \
     name: docker \
     post: 5432 \
     username: postgres \
     password: root \
     server: 172.17.0.2 (below are the cmds to get the id)

```cmd
$ docker ps
```

| CONTAINER ID | IMAGE          | COMMAND                | CREATED        | STATUS        | PORTS                       | NAMES         |
| ------------ | -------------- | ---------------------- | -------------- | ------------- | --------------------------- | ------------- |
| cfcca4b961b9 | dpage/pgadmin4 | "/entrypoint.sh"       | 14 minutes ago | Up 14 minutes | 443/tcp, 0.0.0.0:82->80/tcp | contact_admin |
| e14cd1f4a369 | postgres       | "docker-entrypoint.s…" | 14 minutes ago | Up 14 minutes | 0.0.0.0:5432->5432/tcp      | contact_app   |

```cmd
$ docker inspect e14cd1f4a369 | grep IPAddress

    "SecondaryIPAddresses": null,
    "IPAddress": "172.17.0.2",
          "IPAddress": "172.17.0.2",
```

---

3. Migrate Data

```sh
   npm run typeorm:migration:generate -- my_init
   npm run typeorm:migration:run
```

```






---
### Helper Links

1. NestJS, TypeORM and PostgreSQL Tutorial

   [NestJS, TypeORM and PostgreSQL Tutorial Project](https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f)

2. How to run PostgreSQL & PgAdmin using Docker

   [How to run PostgreSQL & PgAdmin in 3 steps using Docker](https://migueldoctor.medium.com/how-to-run-postgresql-pgadmin-in-3-steps-using-docker-d6fe06e47ca1)

   [Run PostgreSQL and pgAdmin in docker for local development using docker compose](https://belowthemalt.com/2021/06/09/run-postgresql-and-pgadmin-in-docker-for-local-development-using-docker-compose/)

```
