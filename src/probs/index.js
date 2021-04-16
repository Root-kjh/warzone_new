import Router from 'koa-router';

const router = new Router();

router.get('/:propId', (ctx, next) => {
    const { propId } = ctx.params;
    ctx.body = "propinfo";
});

router.post('/:propId', (ctx, next) => {
    const { propId } = ctx.params;
    ctx.body = "propinfo";
});

router.put('/:propId', (ctx, next) => {
    const { propId } = ctx.params;
    ctx.body = "propinfo";
});

router.delete('/:propId', (ctx, next) => {
    const { propId } = ctx.params;
    ctx.body = "propinfo";
});

export default router;