const Router = require('koa-router');

const router = new Router();

router.post('/signin', (ctx, next) => {
    ctx.body = "signin";
});

router.post('/signup', (ctx, next) => {
    ctx.body = "signup";
});

module.exports = router;