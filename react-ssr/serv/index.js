import path from 'path';
import Koa from 'koa';
import Server from 'koa-static';

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3001, () => {
    console.log('server start up ~~~');
});