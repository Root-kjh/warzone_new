const Router = require('koa-router');

const router = new Router();

router.get('/:username', (ctx, next) => {
    const { username } = ctx.params;
    ctx.body = "getuserinfo";
});

router.put('/:userId', (ctx, next) => {
    const { userId } = ctx.params;
    ctx.body = "updateuserinfo";
});

router.patch('/:userId', (ctx, next) => {
    const { userId } = ctx.params;
    ctx.body = "updatepassword";
});

router.delete('/:userId', (ctx, next) => {
    const { userId } = ctx.params;
    ctx.body = "withdraw";
});

router.post('/:userId/props/:propId', (ctx, next) => {
    const { userId, propId } = ctx.params;
    ctx.body = "authprop";
});

module.exports = router;