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

commit3:
	We create a route and return "Hello World" by just visiting: `http://localhost:3000/`.

commit4:
	We add a basic CRUD for all possibilities (GET, PUT, DEL & POST).
	And we can test them with thunderclient.

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

Luego cambio el get para hacer un pedido a la DB y uso console log para entender el elemento resultante (commit5).

Viendo el console.log:

```
Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [ { now: 2022-09-03T20:40:52.971Z } ],
  fields: [
  ...
```

Lo que quiero es: `result.rows[0].now` (commit6).

## Controladores del Servidor (29:43)

commit6:
	Movemos toda la funcionalidad a un controlador y lo invocamos (más ordenado).
commit7:
	Movemos todas las funcionalidades al controlador.

## Metodo POST - Crear Tarea (34:56)

commit8:
	Recibimos en el controlador un JSON. Agregado además el pedido via ThunderPOST.
commit9:
	Insertamos algo en la DB y vemos con console log que información nos da postgres.

```
Result {
  command: 'INSERT',
  rowCount: 1,
  oid: 0,
  rows: [ { id: 4, title: 'tarea2', description: 'Another description' } ],
  fields: [
    ...
```

commit10:
	Ahora devolvemos un JSON con la respuesta de postgres.
commit11:
	Manejamos el error y lo enviamos como un JSON.
