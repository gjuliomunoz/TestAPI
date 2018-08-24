const Router = require('koa-router');
const usSaludImplementations = require('./Implementations');


const router = new Router({
    prefix: '/users',
  });

const users = [];

router.get('/',usSaludImplementations.getUsers);

router.post('/',usSaludImplementations.saveUser);

//exponer variable router
module.exports = router;