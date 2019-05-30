const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const serve = require('koa-static');
const {search, movies} = require('./search')
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const convert = require('koa-convert');

const app = new Koa();
const router = new Router();
app.use(cors({'Access-Control-Allow-Origin': '*'}));
app.use(logger());
app.use(koaBody());
app.use(convert(serve(__dirname + '/static')));

router.get("/", async(ctx, next) => 
  serve(`${__dirname}/public`)(
    Object.assign(ctx, { path: 'index.html' }), 
    next)
  );

router.get('/search', async (ctx, next) => {
    let key = ctx.request.query.key;
    let filter = ctx.request.query.filter;
    console.log(filter)
    if(filter && (filter[0] === "{" || filter[0] === "[")) filter = JSON.parse(filter)
    console.log(key)
    ctx.body = await search(key, filter);
});

router.get('/movies', async (ctx, next) => {
    ctx.body = movies;
});

router.get('/movies/:id', async (ctx, next) => {
        ctx.body = movies.filter(movie => movie.id === ctx.params.id)[0];
})
 
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
