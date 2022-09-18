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

## Metodo GET - Listar Tareas (46:27)

commit12:
	Listamos todas las tareas y las mostramos por consola.
commit13:
	Ahora si lo vemos como un JSON que retorna nuestro backend.

## Metodo GET - Obtener Tarea (50:34)

commit14:
	We get a param from the request and we show it on the console.
commit15:
	We now get from the DB the requested data and show it in the console.
commit16:
	Getting the data as a JSON and dealing with errors.
commit17:
	Sanitazing the input to make sure we only get numbers as IDs.
		(using validation shown in https://medium.com/sean3z/express-route-param-regex-validation-de3790d110c3)

Some interesting stuff:

- [Curly braces around JS variable](https://stackoverflow.com/questions/25187903/what-do-curly-braces-around-javascript-variable-name-mean): This is similar to Python tupples. Starting with JavaScript 1.7 (and ECMAScript 6) you can do [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
- [Express Validator](https://express-validator.github.io/docs/)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Express route param regex validation](https://medium.com/sean3z/express-route-param-regex-validation-de3790d110c3)
- [How to make input validation simple and clean in your Express.js app](https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/)

## Metodo DELETE - Eliminar Tarea (58:07)

commit18:
	We delete the record and report it on the console.
commit19:
	We now properly return if the delete was successful or not.
commit20:
	Returned content wasn't really necessary, so we return 204.

## Metodo PUT - Actualizar Tarea (01:04:42)

commit21:
	We now have a update function working.

## Express Middleware de Error (01:11:26)

This part explains the use of next():
	https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express
	http://expressjs.com/en/guide/using-middleware.html
	https://arunrajeevan.medium.com/middleware-and-next-in-expressjs-node-39f7c0ef277e

commit22:
	Added a middleware error function and use it on createTask with next.
