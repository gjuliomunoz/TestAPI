//Referencia a rutas
const Router = require('koa-router');
const router = new Router();

//Referencia a controlador ussalud
const usSaludController = require('./Controllers/UsuarioSalud');


//Ruta para consultar la salud de la aplicacion
router.get('/health',(ctx) =>{
    ctx.body = 'my api si alive!!';
})

//Agrega las rutas del controlador
router.use(usSaludController.routes());

//Expone variable hacia afuera
module.exports = router;