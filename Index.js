// Variable con dependencias del server KOA
const Koa = require('koa');
// Variable con dependencias del parser de los body (json)
const bodyParser = require('koa-bodyparser');
// variable con rutas
const router = require('./Router');

// Crear instancia del servidor
const app = new Koa();

// Asignar parser y rutas
app
  .use(bodyParser())
  .use(router.routes());

// Poner el servidor en modo listen puerto 3000, e invocar asincronicamente la escritura al log;
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Comentario para realizar PUSH en GIT
