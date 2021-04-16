import Koa from 'koa';
import Router from 'koa-router';
import auth from './auth';
import probs from './probs';
import users from './users';
import rank from './rank';

const app = new Koa();
const router = new Router();

router.use('/auth', auth.routes());
router.use('/users', users.routes());
router.use('/probs', probs.routes());
router.use('/rank', rank.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4100, () => {
    console.log('listening to port 4100');
});