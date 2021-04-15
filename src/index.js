const auth = require('./auth');
const props = require('./props');
const users = require('./users');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.use('/auth', auth.routes());
router.use('/users', users.routes());
router.use('/props', props.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4100, () => {
    console.log('listening to port 4100');
});