# My PERN App

## Backend setup (03:30)

App name:

```
mkdir sosbase ; cd sosbase
```

Basic structure and packages:

```
# ./sosbase/
mkdir backend
mkdir frontend
cd backend
npm init -y
# App Packages
npm i express morgan cors
# Dev Dependecies
npm i nodemon -D
```

Basic backend structure:

```
# ./sosbase/backend/
mkdir src ; cd src
touch index.js
mkdir routes
touch routes/tasks.routes.js
mkdir controllers
touch controllers/tasks.controller.js
touch config.js
touch db.js
```

We start editing files:

```
# ./sosbase/
cd ../..
code .
```

With the first commit we can run an empty server:

```
# ./sosbase/backend/
cd backend
npm run start
```

With the second commit we have logging and a files change awareness:

```
# ./sosbase/backend/
npm run dev
```

## Endpoints (13:26)

En el 3rd commit we create a route and return "Hello World" by just visiting: `http://localhost:3000/`.

Tested all possibilities (GET, PUT, DEL & POST) with thunderclient. Seems quite straight forward.

## Conexión a PostgreSQL (21:03)

We need the postgres server running, I used the dockerized version.

We also need the node "pg" module:

```
# ./sosbase/backend/
npm i pg
```

We need to manually create de database:

```
# ./sosbase/
mkdir database ; cd database
touch db.sql
```

The description for the DB to connect is in the `db.sql`.

Luego cambio el get para hacer un pedido a la DB y uso console log para entender el elemento resultante (commit 4).

