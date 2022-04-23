#!/bin/bash
set -e

AdminSERVER="contact_admin";

DBSERVER="contact_app";
PW="root";
DB="contact_app";

# remove the old server instance if exists & create a new ser instance (db)
echo "echo stop & remove old docker db [$DBSERVER] and starting new fresh instance of [$DBSERVER]"
(docker kill $DBSERVER || :) && \
  (docker rm $DBSERVER || :) && \
  docker run --name $DBSERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -p 5432:5432 \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$DBSERVER] to start";
SLEEP 3;
 
# create the db 
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $DBSERVER psql -U postgres
echo "\l" | docker exec -i $DBSERVER psql -U postgres

# create a new ser instance (pgamin)
docker run --name $AdminSERVER -p 82:80 \
    -e PGADMIN_DEFAULT_EMAIL=user@domain.local \
    -e PGADMIN_DEFAULT_PASSWORD=postgresmaster \
    -d dpage/pgadmin4
