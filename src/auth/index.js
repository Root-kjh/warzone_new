import Router from 'koa-router';
import { signin, signup } from './views';

const router = new Router();

router.post('/signin', ctx => {
    ctx.body = "signin";
});

router.post('/signup', ctx => {
    const {username, email, password } = ctx.request.body;
    try {
        ctx.body = signup(username, email, password);
        console.log(ctx.body);
    } catch (error) {
        console.log(error);
        if (error.name == "userExistError"){
            ctx.throw("user exist", 400);
        }
        else{
            console.log(error);
            ctx.throw("request data invalid", 400);
        }
    }
});

export default router;