import Router from 'koa-router';
import { signin, signup } from './views';

const router = new Router();

router.post('/signin', ctx => {
    ctx.body = "signin";
});

router.post('/signup', ctx => {
    const reqeustBody = ctx.request.body;
    try {
        ctx.body = signup(reqeustBody.username, reqeustBody.email, reqeustBody.password);
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