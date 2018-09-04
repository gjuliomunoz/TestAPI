// Referencia a rutas
const Router = require('koa-router');
// Referencia a controlador ussalud
/* eslint import/no-unresolved: [2, { caseSensitive: true }] */
const usSaludController = require('./Controllers/UsuarioSalud');

const router = new Router();

// Ruta para consultar la salud de la aplicacion
router.get('/health', (ctx) => {
  ctx.body = 'my api si alive!!';
});

// Agrega las rutas del controlador
router.use(usSaludController.routes());

// Expone variable hacia afuera
module.exports = router;
